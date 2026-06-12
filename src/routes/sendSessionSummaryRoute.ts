import { Hono } from "hono";
import { sessionSummaryTemplate } from "../core/emailTemplates";
import { EMAIL_REGEX } from "../core/constants";
import { SendSessionSummaryBody } from "../models/SendSessionSummaryBody";
import { parseJsonBody } from "../utils/requestBody";
import { sendMailResponse } from "../utils/sendMailResponse";

export const sendSessionSummaryRouter = new Hono();

sendSessionSummaryRouter.post("/", async (c) => {
  const parsed = await parseJsonBody<SendSessionSummaryBody>(c);
  if (!parsed.ok) return parsed.response;
  const body = parsed.body;

  const { to, subjectName, sessionNumber, sessionType, presentCount, absentCount, totalEnrolled, appName } = body;

  if (!to || !subjectName || sessionNumber == null || !sessionType || presentCount == null || absentCount == null || totalEnrolled == null) {
    return c.json({ error: "Missing required fields", details: "to, subjectName, sessionNumber, sessionType, presentCount, absentCount, totalEnrolled are required" }, 400);
  }

  if (!EMAIL_REGEX.test(to)) {
    return c.json({ error: "Invalid email format" }, 400);
  }

  const name = appName ?? "Tapiz Labs";
  return sendMailResponse(c, {
    appName: name,
    to,
    subject: `${name} — Izveštaj termina ${sessionNumber}: ${subjectName}`,
    html: sessionSummaryTemplate(subjectName, sessionNumber, sessionType, presentCount, absentCount, totalEnrolled, name),
    text: [
      `Izveštaj termina ${sessionNumber} — ${subjectName} (${sessionType})`,
      "",
      `Prisutnih:  ${presentCount}`,
      `Odsutnih:   ${absentCount}`,
      `Upisanih:   ${totalEnrolled}`,
      `Stopa prisustva: ${totalEnrolled > 0 ? Math.round((presentCount / totalEnrolled) * 100) : 0}%`,
    ].join("\n"),
    successMessage: "Session summary sent successfully",
    logLabel: "Session summary sent",
  });
});
