import type { Context } from "hono";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { getSmtpFrom, getTransporter } from "../core/mailer";
import { smtpErrorMessage } from "./smtpErrorUtil";

export interface SendMailOptions {
  appName: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  successMessage: string;
  logLabel: string;
}

export async function sendMailResponse(
  c: Context,
  options: SendMailOptions,
): Promise<Response> {
  const { appName, to, subject, html, text, successMessage, logLabel } = options;

  try {
    const info = await getTransporter().sendMail({
      from: `"${appName}" <${getSmtpFrom()}>`,
      to,
      subject,
      html,
      text,
    } as SMTPTransport.Options);

    console.log(`[Mail Service] ${logLabel} to ${to}, messageId: ${info.messageId}`);

    return c.json({
      success: true,
      messageId: info.messageId,
      message: successMessage,
    });
  } catch (err) {
    console.error("[Mail Service] SMTP error:", err);

    return c.json(
      {
        error: smtpErrorMessage(err),
        details: err instanceof Error ? err.message : String(err),
      },
      500,
    );
  }
}
