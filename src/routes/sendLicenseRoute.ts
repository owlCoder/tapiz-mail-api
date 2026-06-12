import { Hono } from "hono";
import { licenseKeyTemplate } from "../core/emailTemplates";
import { EMAIL_REGEX } from "../core/constants";
import { SendLicenseBody } from "../models/SendLicenseBody";
import { parseJsonBody } from "../utils/requestBody";
import { sendMailResponse } from "../utils/sendMailResponse";

const LICENSE_KEY_REGEX = /^TPZ-[A-Z2-9]{4}-[A-Z2-9]{4}-[A-Z2-9]{4}-[A-Z2-9]{4}-[A-Z2-9]{4}$/;
const PLAN_LABELS: Record<SendLicenseBody["plan"], string> = {
  starter: "Starter",
  pro: "Pro",
  institution: "Institution",
};

function isPlan(value: unknown): value is SendLicenseBody["plan"] {
  return value === "starter" || value === "pro" || value === "institution";
}

function formatDate(value?: string | null): string {
  if (!value) return "bez definisanog isteka";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "bez definisanog isteka";
  return new Intl.DateTimeFormat("sr-RS", { dateStyle: "long" }).format(date);
}

export const sendLicenseRouter = new Hono();

sendLicenseRouter.post("/", async (c) => {
  const parsed = await parseJsonBody<SendLicenseBody>(c);
  if (!parsed.ok) return parsed.response;
  const body = parsed.body;

  const { to, key, plan, expiresAt, isTrial, appName } = body;

  if (!to || !key || !plan) {
    return c.json(
      { error: "Missing required fields", details: "to, key and plan are required" },
      400,
    );
  }

  if (!EMAIL_REGEX.test(to)) {
    return c.json({ error: "Invalid email format" }, 400);
  }

  if (!LICENSE_KEY_REGEX.test(key)) {
    return c.json({ error: "Invalid license key format" }, 400);
  }

  if (!isPlan(plan)) {
    return c.json({ error: "Invalid plan" }, 400);
  }

  if (expiresAt) {
    const date = new Date(expiresAt);
    if (Number.isNaN(date.getTime())) {
      return c.json({ error: "Invalid expiresAt date" }, 400);
    }
  }

  const name = appName ?? "Tapiz Labs";
  const planLabel = PLAN_LABELS[plan];
  const expiresLabel = formatDate(expiresAt);
  return sendMailResponse(c, {
    appName: name,
    to,
    subject: `${name} — Licencni ključ za ${planLabel} plan`,
    html: licenseKeyTemplate(key, plan, expiresAt ?? null, isTrial ?? false, name),
    text: [
      "Poštovani korisniče,",
      "",
      `U nastavku se nalazi Vaš licencni ključ za ${name}.`,
      `Plan: ${planLabel}`,
      `Istek: ${expiresLabel}`,
      isTrial ? "Tip: probna licenca" : "Tip: licenca",
      "",
      key,
      "",
      "Prijavite se u aplikaciju i unesite ključ na stranici Licenca.",
      "Ako niste očekivali ovu poruku, možete je bezbedno zanemariti.",
    ].join("\n"),
    successMessage: "License key sent successfully",
    logLabel: "License email sent",
  });
});
