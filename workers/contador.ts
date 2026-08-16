import { DurableObject } from "cloudflare:workers";

/**
 * Contador de visitas propio, sin terceros.
 *
 * Guarda dos cosas: un total acumulado y las claves de quienes ya pasaron
 * hoy, para no contar dos veces a la misma persona el mismo día. Las claves
 * son hashes que se borran al día siguiente; nunca se almacena la IP.
 */
export class ContadorVisitas extends DurableObject {
	private readonly sql: SqlStorage;

	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env);
		this.sql = ctx.storage.sql;

		this.sql.exec(`
			CREATE TABLE IF NOT EXISTS contador (
				id INTEGER PRIMARY KEY,
				total INTEGER NOT NULL
			);
		`);
		this.sql.exec(`
			CREATE TABLE IF NOT EXISTS visitantes (
				clave TEXT PRIMARY KEY,
				dia TEXT NOT NULL
			);
		`);
		this.sql.exec(
			"INSERT INTO contador (id, total) VALUES (1, 0) ON CONFLICT (id) DO NOTHING;",
		);
	}

	/**
	 * Registra una visita si esa clave no pasó hoy y devuelve el total.
	 * Es atómico: el Durable Object serializa las llamadas concurrentes.
	 */
	async registrar(clave: string, dia: string): Promise<number> {
		// Las claves de días anteriores ya no sirven para deduplicar.
		this.sql.exec("DELETE FROM visitantes WHERE dia < ?", dia);

		const repetida =
			this.sql.exec("SELECT 1 FROM visitantes WHERE clave = ?", clave).toArray()
				.length > 0;

		if (!repetida) {
			this.sql.exec(
				"INSERT INTO visitantes (clave, dia) VALUES (?, ?)",
				clave,
				dia,
			);
			this.sql.exec("UPDATE contador SET total = total + 1 WHERE id = 1");
		}

		return this.total();
	}

	async total(): Promise<number> {
		const fila = this.sql
			.exec<{ total: number }>("SELECT total FROM contador WHERE id = 1")
			.toArray()[0];

		return fila?.total ?? 0;
	}
}
