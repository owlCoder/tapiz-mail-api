import type { Context } from "hono";

export async function parseJsonBody<T>(c: Context): Promise<
  | { ok: true; body: T }
  | { ok: false; response: Response }
> {
  try {
    const body = await c.req.json<T>();
    return { ok: true, body };
  } catch {
    return { ok: false, response: c.json({ error: "Invalid JSON body" }, 400) };
  }
}
