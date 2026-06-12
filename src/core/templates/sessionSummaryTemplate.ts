import { HEX } from "../colors";

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
