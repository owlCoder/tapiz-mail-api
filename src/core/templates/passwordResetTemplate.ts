import { HEX } from "../colors";

export function passwordResetTemplate(link: string, appName = "Tapiz"): string {
  return /* html */ `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resetovanje lozinke · ${appName}</title>
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
      font-size: 10px;
      font-weight: 700;
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

    .btn-wrapper {
      text-align: center;
      margin: 24px 0;
    }

    .btn {
      display: inline-block;
      background: ${HEX.primary};
      color: #000000 !important;
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
      padding: 13px 28px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }

    .link-fallback {
      background: #0c0f16;
      border: 1px solid #1d2330;
      padding: 12px 16px;
      margin: 16px 0;
      font-size: 11px;
      color: #6b7686;
      word-break: break-all;
    }

    .link-fallback a { color: ${HEX.primary200}; }

    .validity {
      font-size: 12px;
      background: rgba(20, 150, 179, 0.06);
      border: 1px solid rgba(20, 150, 179, 0.18);
      padding: 7px 16px;
      text-align: center;
      display: inline-block;
      margin: 0 auto;
      color: #aab3c2;
    }

    .validity strong {
      color: #fbbf24;
      font-weight: 600;
    }

    .validity-wrapper {
      text-align: center;
      margin-bottom: 20px;
    }

    .warning {
      background: rgba(217, 119, 6, 0.08);
      border-left: 3px solid #d97706;
      padding: 12px 16px;
      margin: 20px 0 16px;
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
      .header h2 { font-size: 18px; }
      .btn { padding: 11px 20px; font-size: 13px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2><span>${appName}</span> · Resetovanje lozinke</h2>
      <div class="badge">Zahtev za promenu lozinke</div>
    </div>
    <div class="content">
      <div class="greeting">Poštovani korisniče,</div>
      <div class="instruction">
        Primili smo zahtev za resetovanje lozinke na Vašem nalogu. Kliknite na dugme ispod da biste kreirali novu lozinku.
      </div>

      <div class="btn-wrapper">
        <a href="${link}" class="btn">Resetovanje lozinke</a>
      </div>

      <div class="validity-wrapper">
        <div class="validity">
          Link ističe za <strong>30 minuta</strong>
        </div>
      </div>

      <div class="link-fallback">
        Ukoliko dugme ne radi, kopirajte sledeći link u pregledač:<br />
        <a href="${link}">${link}</a>
      </div>

      <div class="warning">
        Ukoliko niste zatražili resetovanje lozinke, možete bezbedno zanemariti ovu poruku. Vaša lozinka neće biti promenjena.
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
