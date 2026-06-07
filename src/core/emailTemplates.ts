import { HEX } from "../core/colors";
export { licenseKeyTemplate } from "./templates/licenseEmailTemplate";

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

export function sessionSummaryTemplate(
  subjectName: string,
  sessionNumber: number,
  sessionType: string,
  presentCount: number,
  absentCount: number,
  totalEnrolled: number,
  appName = "Tapiz",
): string {
  const attendanceRate = totalEnrolled > 0 ? Math.round((presentCount / totalEnrolled) * 100) : 0;
  const rateColor = attendanceRate >= 70 ? "#4dd6a3" : attendanceRate >= 50 ? "#fbbf24" : "#ff7a4d";

  return /* html */ `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Izveštaj termina · ${appName}</title>
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
    .header h2 { font-size: 20px; font-weight: 600; color: #f1f4f9; letter-spacing: -0.3px; }
    .header h2 span { color: ${HEX.primary200}; }
    .header .badge {
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
    .content { padding: 28px; }
    .subject-label { font-size: 10px; color: ${HEX.primary}; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; }
    .subject-name { font-size: 18px; font-weight: 700; color: #f1f4f9; margin-bottom: 4px; }
    .session-meta { font-size: 13px; color: #6b7686; margin-bottom: 24px; }
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      margin: 20px 0;
    }
    .stat-card {
      background: #0c0f16;
      border: 1px solid #1d2330;
      padding: 14px 10px;
      text-align: center;
    }
    .stat-value { font-size: 28px; font-weight: 700; font-family: 'IBM Plex Mono', monospace; }
    .stat-label { font-size: 10px; color: #6b7686; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.8px; }
    .stat-present .stat-value { color: #4dd6a3; }
    .stat-absent  .stat-value { color: #ff7a4d; }
    .stat-total   .stat-value { color: ${HEX.primary200}; }
    .rate-bar-wrapper { margin: 16px 0 8px; }
    .rate-bar-label { display: flex; justify-content: space-between; font-size: 11px; color: #6b7686; margin-bottom: 6px; }
    .rate-bar-track { height: 6px; background: #1d2330; overflow: hidden; }
    .rate-bar-fill { height: 100%; background: ${rateColor}; width: ${attendanceRate}%; }
    .footer {
      text-align: center;
      padding: 16px 28px 24px;
      font-size: 11px;
      color: #444c5c;
      border-top: 1px solid #1d2330;
      background: #0c0f16;
    }
    .footer p { margin: 6px 0; }
    hr { margin: 10px 0; border: none; height: 1px; background: #1d2330; }
    @media (max-width: 480px) {
      .content { padding: 20px 14px; }
      .stats-grid { grid-template-columns: 1fr 1fr; }
      .stat-total { grid-column: 1 / -1; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2><span>${appName}</span> · Izveštaj prisustva</h2>
      <div class="badge">Termin završen</div>
    </div>
    <div class="content">
      <div class="subject-label">Predmet</div>
      <div class="subject-name">${subjectName}</div>
      <div class="session-meta">Termin ${sessionNumber} &nbsp;·&nbsp; ${sessionType}</div>

      <div class="stats-grid">
        <div class="stat-card stat-present">
          <div class="stat-value">${presentCount}</div>
          <div class="stat-label">Prisutnih</div>
        </div>
        <div class="stat-card stat-absent">
          <div class="stat-value">${absentCount}</div>
          <div class="stat-label">Odsutnih</div>
        </div>
        <div class="stat-card stat-total">
          <div class="stat-value">${totalEnrolled}</div>
          <div class="stat-label">Upisanih</div>
        </div>
      </div>

      <div class="rate-bar-wrapper">
        <div class="rate-bar-label">
          <span>Stopa prisustva</span>
          <span style="font-weight:700; color:${rateColor}">${attendanceRate}%</span>
        </div>
        <div class="rate-bar-track">
          <div class="rate-bar-fill"></div>
        </div>
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
