import { HEX } from "../colors";

function licensePlanLabel(plan: "starter" | "pro" | "institution"): string {
  if (plan === "institution") return "Institution";
  if (plan === "pro") return "Pro";
  return "Starter";
}

function licenseExpiryLabel(expiresAt?: string | null): string {
  if (!expiresAt) return "Bez definisanog isteka";
  const date = new Date(expiresAt);
  if (Number.isNaN(date.getTime())) return "Bez definisanog isteka";
  return new Intl.DateTimeFormat("sr-RS", { dateStyle: "long" }).format(date);
}

export function licenseKeyTemplate(
  key: string,
  plan: "starter" | "pro" | "institution",
  expiresAt?: string | null,
  isTrial = false,
  appName = "Tapiz",
): string {
  const planLabel = licensePlanLabel(plan);
  const expiryLabel = licenseExpiryLabel(expiresAt);
  const badge = isTrial ? "Probna licenca" : "Licencni ključ";
  const validityText = isTrial
    ? `Probna licenca važi do <strong>${expiryLabel}</strong>.`
    : expiresAt
      ? `Licenca važi do <strong>${expiryLabel}</strong>.`
      : "Licenca nema definisan datum isteka.";

  return /* html */ `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Licencni ključ · ${appName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'IBM Plex Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: #0c0f16;
      margin: 0;
      padding: 32px 20px;
      line-height: 1.5;
      color: #f1f4f9;
    }
    .container {
      max-width: 560px;
      margin: 0 auto;
      background: #11151e;
      border: 1px solid #1d2330;
      overflow: hidden;
    }
    .header {
      background: ${HEX.primary900};
      padding: 28px;
      text-align: center;
      border-bottom: 2px solid ${HEX.primary};
    }
    .header h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.3px;
      color: #f1f4f9;
    }
    .header h2 span { color: ${HEX.primary200}; }
    .badge {
      display: inline-block;
      background: rgba(20, 150, 179, 0.15);
      border: 1px solid rgba(20, 150, 179, 0.3);
      padding: 3px 12px;
      font-size: 11px;
      font-weight: 600;
      color: ${HEX.primary200};
      margin-top: 10px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
    .content { padding: 32px 28px 28px; }
    .greeting {
      font-size: 15px;
      font-weight: 500;
      color: #f1f4f9;
      margin-bottom: 8px;
    }
    .instruction {
      color: #aab3c2;
      font-size: 14px;
      margin-bottom: 24px;
      border-left: 2px solid ${HEX.primary};
      padding-left: 14px;
    }
    .license-card {
      background: #0c0f16;
      border: 1px solid #1d2330;
      padding: 18px 20px 20px;
      text-align: center;
      margin: 20px 0 24px;
    }
    .license-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 700;
      color: ${HEX.primary};
      display: inline-block;
      padding: 4px 10px;
      background: rgba(20, 150, 179, 0.1);
      border: 1px solid rgba(20, 150, 179, 0.2);
    }
    .license-key {
      font-family: 'IBM Plex Mono', 'SF Mono', 'Fira Code', 'Courier New', monospace;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 2px;
      color: ${HEX.primary200};
      padding: 18px 4px 10px;
      word-break: break-word;
      text-align: center;
    }
    .meta {
      background: rgba(20, 150, 179, 0.06);
      border: 1px solid rgba(20, 150, 179, 0.18);
      padding: 12px 16px;
      margin: 20px 0;
      font-size: 13px;
      color: #aab3c2;
    }
    .meta div { margin: 4px 0; }
    .meta strong { color: ${HEX.primary200}; font-weight: 600; }
    .cta {
      text-align: center;
      margin: 24px 0 10px;
    }
    .cta span {
      display: inline-block;
      background: ${HEX.primary};
      color: #ffffff;
      padding: 11px 20px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.2px;
    }
    .warning {
      background: rgba(217, 119, 6, 0.08);
      border-left: 3px solid #d97706;
      padding: 12px 16px;
      margin: 28px 0 16px;
      font-size: 13px;
      color: #fbbf24;
    }
    .footer {
      text-align: center;
      padding: 0 28px 28px;
      font-size: 11px;
      color: #444c5c;
      border-top: 1px solid #1d2330;
      margin-top: 8px;
      background: #0c0f16;
    }
    .footer p { margin: 8px 0; }
    hr {
      margin: 14px 0 10px;
      border: none;
      height: 1px;
      background: #1d2330;
    }
    @media (max-width: 520px) {
      body { padding: 12px; }
      .content { padding: 24px 16px; }
      .license-key { font-size: 18px; letter-spacing: 1px; }
      .header h2 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2><span>${appName}</span> · Licenca</h2>
      <div class="badge">${badge}</div>
    </div>
    <div class="content">
      <div class="greeting">Poštovani korisniče,</div>
      <div class="instruction">
        U nastavku se nalazi licencni ključ za aktivaciju plana u aplikaciji ${appName}.
      </div>

      <div class="license-card">
        <div class="license-label">Licencni ključ</div>
        <div class="license-key">${key}</div>
      </div>

      <div class="meta">
        <div>Plan: <strong>${planLabel}</strong></div>
        <div>Trajanje: ${validityText}</div>
      </div>

      <div class="cta"><span>Unesi ključ u aplikaciji</span></div>

      <div class="warning">
        Čuvajte ovaj ključ bezbedno. Ključ se vezuje za instituciju prilikom aktivacije i može biti opozvan od strane administratora.
      </div>
    </div>
    <div class="footer">
      <p>Automatski generisana poruka · Molimo Vas da ne odgovarate na ovaj e‑mail</p>
      <hr />
      <p>© ${new Date().getFullYear()} ${appName} — Sva prava zadržana.</p>
    </div>
  </div>
</body>
</html>`;
}
