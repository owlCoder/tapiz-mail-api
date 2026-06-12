import { Hono } from "hono";
import { twoFactorTemplate } from "../core/emailTemplates";
import { EMAIL_REGEX, CODE_REGEX } from "../core/constants";
import { Send2faBody } from "../models/Send2faBody";
import { parseJsonBody } from "../utils/requestBody";
import { sendMailResponse } from "../utils/sendMailResponse";

export const send2faRouter = new Hono();

send2faRouter.post("/", async (c) => {
  const parsed = await parseJsonBody<Send2faBody>(c);
  if (!parsed.ok) return parsed.response;
  const body = parsed.body;

  const { to, code, appName } = body;

  if (!to || !code) {
    return c.json(
      { error: "Missing required fields", details: "to and code are required" },
      400,
    );
  }

  if (!EMAIL_REGEX.test(to)) {
    return c.json({ error: "Invalid email format" }, 400);
  }

  if (!CODE_REGEX.test(code)) {
    return c.json({ error: "Code must be 6 digits" }, 400);
  }

  const name = appName ?? "Tapiz Labs";
  return sendMailResponse(c, {
    appName: name,
    to,
    subject: `${name} — 2FA kod: ${code}`,
    html: twoFactorTemplate(code, name),
    text: [
      `Vaš 2FA kod za ${name} je: ${code}`,
      "",
      "Ovaj kod važi narednih 15 minuta.",
      "Ako niste pokušali da se prijavite, ignorišite ovaj email.",
    ].join("\n"),
    successMessage: "2FA code sent successfully",
    logLabel: "Sent",
  });
});
