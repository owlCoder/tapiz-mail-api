import { HEX } from "../colors";

export function twoFactorTemplate(code: string, appName = "Tapiz"): string {
  return /* html */ `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dvofaktorski kod autentifikacije · ${appName}</title>
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

    .header h2 span {
      color: ${HEX.primary200};
    }

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

    .content {
      padding: 32px 28px 28px;
    }

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

    .code-card {
      background: #0c0f16;
      border: 1px solid #1d2330;
      padding: 8px 20px 16px;
      text-align: center;
      margin: 20px 0 24px;
    }

    .code-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 700;
      color: ${HEX.primary};
      display: inline-block;
      padding: 4px 10px;
      margin-top: 8px;
      background: rgba(20, 150, 179, 0.1);
      border: 1px solid rgba(20, 150, 179, 0.2);
    }

    .code {
      font-family: 'IBM Plex Mono', 'SF Mono', 'Fira Code', 'Courier New', monospace;
      font-size: 44px;
      font-weight: 700;
      letter-spacing: 12px;
      color: ${HEX.primary200};
      padding: 16px 4px 8px;
      word-break: break-word;
      text-align: center;
    }

    .validity {
      font-size: 12px;
      background: rgba(20, 150, 179, 0.06);
      border: 1px solid rgba(20, 150, 179, 0.18);
      padding: 7px 16px;
      text-align: center;
      display: inline-block;
      margin: 10px auto 0;
      color: #aab3c2;
    }

    .validity strong {
      color: ${HEX.primary200};
      font-weight: 600;
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
      .code { font-size: 34px; letter-spacing: 7px; }
      .header h2 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2><span>${appName}</span> · Dvofaktorska autentifikacija</h2>
      <div class="badge">Sigurnosni pristupni kod</div>
    </div>
    <div class="content">
      <div class="greeting">Poštovani korisniče,</div>
      <div class="instruction">
        U nastavku se nalazi Vaš jednokratni kod za prijavljivanje.
      </div>

      <div class="code-card">
        <div class="code">${code}</div>
        <div class="code-label">Verifikacioni kod</div>
      </div>

      <div style="text-align: center;">
        <div class="validity">
          Ovaj kod ističe za <strong>15 minuta</strong>
        </div>
      </div>

      <div class="warning">
        Nemojte nikome otkrivati ovaj kod. ${appName} Vas nikada neće pitati za Vaš jednokratni kod.
      </div>

      <p style="font-size: 12px; color: #444c5c; margin-top: 20px; text-align: center;">
        Ukoliko niste pokušali da se prijavite, možete bezbedno zanemariti ovu poruku.
      </p>
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
