// src/routes/sendResetPasswordRoute.ts
import { Hono } from "hono";
import { passwordResetTemplate } from "../core/emailTemplates";
import { EMAIL_REGEX, URL_REGEX } from "../core/constants";
import { SendResetPasswordBody } from "../models/SendResetPasswordBody";
import { parseJsonBody } from "../utils/requestBody";
import { sendMailResponse } from "../utils/sendMailResponse";

export const sendResetPasswordRouter = new Hono();

sendResetPasswordRouter.post("/", async (c) => {
  const parsed = await parseJsonBody<SendResetPasswordBody>(c);
  if (!parsed.ok) return parsed.response;
  const body = parsed.body;

  const { to, link, appName } = body;

  if (!to || !link) {
    return c.json(
      { error: "Missing required fields", details: "to and link are required" },
      400,
    );
  }

  if (!EMAIL_REGEX.test(to)) {
    return c.json({ error: "Invalid email format" }, 400);
  }

  if (!URL_REGEX.test(link)) {
    return c.json({ error: "Invalid reset link URL" }, 400);
  }

  const name = appName ?? "Tapiz Labs";
  return sendMailResponse(c, {
    appName: name,
    to,
    subject: `${name} — Resetovanje lozinke`,
    html: passwordResetTemplate(link, name),
    text: [
      "Poštovani korisniče,",
      "",
      `Zahtevano je resetovanje lozinke za nalog na ${name}.`,
      "Kliknite na sledeći link kako biste postavili novu lozinku:",
      "",
      `${link}`,
      "",
      "Ako niste Vi zahtevali resetovanje lozinke, ignorišite ovaj email.",
      "Link važi narednih 30 minuta.",
    ].join("\n"),
    successMessage: "Reset password email sent successfully",
    logLabel: "Reset password email sent",
  });
});
