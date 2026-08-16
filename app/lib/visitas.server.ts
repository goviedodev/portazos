import { isbot } from "isbot";

/**
 * Sal fija para que el hash de visitante no sea reversible por fuerza bruta
 * sobre el rango de IPs. No es un secreto crítico: las claves duran un día.
 */
const SAL = "portazos::contador::v1";

/**
 * Identificador efímero de visitante. Es un hash de IP, navegador y fecha,
 * truncado. No permite reconstruir la IP ni seguir a nadie entre días.
 */
async function claveVisitante(request: Request, dia: string): Promise<string> {
	const ip = request.headers.get("CF-Connecting-IP") ?? "sin-ip";
	const navegador = request.headers.get("User-Agent") ?? "sin-ua";
	const datos = new TextEncoder().encode(`${SAL}|${ip}|${navegador}|${dia}`);
	const hash = await crypto.subtle.digest("SHA-256", datos);

	return Array.from(new Uint8Array(hash).slice(0, 16))
		.map((byte) => byte.toString(16).padStart(2, "0"))
		.join("");
}

/**
 * Cuenta la visita y devuelve el total. Devuelve null si no se pudo contar,
 * para que un problema del contador nunca impida que la página se muestre.
 */
export async function contarVisita(
	request: Request,
	env: Env,
): Promise<number | null> {
	const navegador = request.headers.get("User-Agent");

	try {
		const contador = env.CONTADOR.get(env.CONTADOR.idFromName("global"));

		// Los bots no son visitas reales: se les muestra el total sin sumar.
		if (!navegador || isbot(navegador)) {
			return await contador.total();
		}

		const dia = new Date().toISOString().slice(0, 10);
		return await contador.registrar(await claveVisitante(request, dia), dia);
	} catch {
		return null;
	}
}
