import { docsThemeCss } from "./docsTheme";

export const docsHtml = /* html */ `<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tapiz Mail Service — API Docs</title>
  <style>
    ${docsThemeCss}
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      min-height: 100%;
      background:
        radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--tapiz-accent) 14%, transparent), transparent 28rem),
        radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--tapiz-signal) 10%, transparent), transparent 24rem),
        var(--tapiz-bg-page);
      color: var(--tapiz-text-primary);
      font-family: var(--font-body);
      line-height: 1.6;
    }
    a { color: inherit; }
    code, pre, .path, .method, .meta-chip, .field-code, .tag, .response-badge, .topbar-badge {
      font-family: var(--font-mono);
    }
    .topbar {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--tapiz-border-strong);
      background: color-mix(in srgb, var(--tapiz-bg-surface) 88%, transparent);
      backdrop-filter: blur(14px);
    }
    .brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
    .brand-mark {
      display: inline-grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border: 1px solid var(--tapiz-border-strong);
      background: var(--tapiz-accent-soft);
      color: var(--tapiz-accent);
      font-weight: 700;
      box-shadow: var(--tapiz-shadow-sm);
    }
    .brand-copy strong { display: block; font-size: 14px; letter-spacing: -0.02em; }
    .brand-copy span {
      display: block;
      font-size: 11px;
      color: var(--tapiz-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }
    .topbar-badge {
      margin-left: auto;
      border: 1px solid var(--tapiz-border-strong);
      padding: 4px 8px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.16em;
      color: var(--tapiz-signal);
      background: var(--tapiz-signal-soft);
      text-transform: uppercase;
    }
    .shell { max-width: 1120px; margin: 0 auto; padding: 28px 16px 56px; }
    .hero {
      display: grid;
      gap: 20px;
      grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
      align-items: stretch;
    }
    .hero-panel, .hero-side, .endpoint, .rate-card {
      border: 1px solid var(--tapiz-border-subtle);
      background: var(--tapiz-bg-surface);
      box-shadow: var(--tapiz-shadow-sm);
    }
    .hero-panel { padding: 28px; border-top: 3px solid var(--tapiz-accent); }
    .kicker {
      display: inline-block;
      margin-bottom: 14px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--tapiz-text-muted);
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(32px, 5vw, 54px);
      line-height: 0.96;
      letter-spacing: -0.06em;
      max-width: 10ch;
    }
    .hero-copy { max-width: 56ch; margin-top: 16px; color: var(--tapiz-text-secondary); font-size: 15px; }
    .hero-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
    .meta-chip {
      border: 1px solid var(--tapiz-border-strong);
      padding: 6px 10px;
      font-size: 10px;
      font-weight: 700;
      color: var(--tapiz-text-secondary);
      background: var(--tapiz-bg-surface-muted);
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .hero-side {
      padding: 20px;
      border-left: 3px solid var(--tapiz-signal);
      display: grid;
      gap: 12px;
      align-content: start;
    }
    .hero-side strong { font-size: 13px; color: var(--tapiz-text-primary); }
    .hero-side p { font-size: 13px; color: var(--tapiz-text-secondary); }
    .rate-card {
      margin-top: 18px;
      padding: 16px 18px;
      border-left: 3px solid var(--tapiz-accent);
      background: color-mix(in srgb, var(--tapiz-bg-surface-muted) 72%, var(--tapiz-bg-surface));
    }
    .section-title {
      margin: 34px 0 14px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--tapiz-text-muted);
    }
    .endpoint { overflow: hidden; margin-bottom: 14px; }
    .endpoint-header {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto auto;
      gap: 12px;
      align-items: center;
      padding: 16px 18px;
      cursor: pointer;
      user-select: none;
      background: linear-gradient(180deg, color-mix(in srgb, var(--tapiz-bg-surface-muted) 46%, transparent), transparent);
    }
    .endpoint-header:hover { background: color-mix(in srgb, var(--tapiz-bg-surface-muted) 65%, transparent); }
    .method {
      min-width: 54px;
      text-align: center;
      padding: 5px 8px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.16em;
      border: 1px solid var(--tapiz-border-strong);
    }
    .method.get { color: var(--tapiz-success); background: var(--tapiz-success-soft); }
    .method.post { color: var(--tapiz-accent); background: var(--tapiz-accent-soft); }
    .path { font-size: 13px; font-weight: 600; color: var(--tapiz-text-primary); overflow-wrap: anywhere; }
    .endpoint-desc { font-size: 12px; color: var(--tapiz-text-muted); text-align: right; }
    .chevron { font-size: 12px; color: var(--tapiz-text-disabled); transition: transform 0.2s ease; }
    .chevron.open { transform: rotate(90deg); }
    .endpoint-body {
      display: none;
      border-top: 1px solid var(--tapiz-border-subtle);
      padding: 18px;
      background: var(--tapiz-bg-surface);
    }
    .endpoint-body.open { display: block; }
    .body-copy { font-size: 14px; color: var(--tapiz-text-secondary); margin-bottom: 14px; }
    .schema-title {
      margin: 18px 0 8px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--tapiz-text-muted);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      overflow: hidden;
      border: 1px solid var(--tapiz-border-subtle);
      background: var(--tapiz-bg-surface-muted);
    }
    th {
      padding: 10px 12px;
      text-align: left;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--tapiz-text-muted);
      background: color-mix(in srgb, var(--tapiz-bg-surface-muted) 82%, var(--tapiz-bg-surface));
      border-bottom: 1px solid var(--tapiz-border-subtle);
    }
    td {
      padding: 10px 12px;
      font-size: 13px;
      color: var(--tapiz-text-secondary);
      background: var(--tapiz-bg-surface);
      border-bottom: 1px solid var(--tapiz-border-subtle);
      vertical-align: top;
    }
    tr:last-child td { border-bottom: none; }
    .field-code {
      display: inline-block;
      padding: 2px 6px;
      color: var(--tapiz-accent);
      background: var(--tapiz-accent-soft);
      border: 1px solid color-mix(in srgb, var(--tapiz-accent) 24%, transparent);
      font-size: 12px;
    }
    .tag {
      display: inline-block;
      padding: 2px 6px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border: 1px solid var(--tapiz-border-strong);
    }
    .tag.req { color: var(--tapiz-danger); background: var(--tapiz-danger-soft); }
    .tag.opt { color: var(--tapiz-text-muted); background: var(--tapiz-bg-surface-muted); }
    .type { color: var(--tapiz-text-muted); font-size: 12px; font-family: var(--font-mono); }
    pre {
      margin-top: 8px;
      padding: 14px 16px;
      overflow-x: auto;
      border: 1px solid var(--tapiz-border-strong);
      background: var(--color-primary-950);
      color: var(--color-primary-300);
      box-shadow: var(--tapiz-shadow-brutal);
    }
    pre code { font-size: 12px; line-height: 1.75; white-space: pre; }
    .response-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .response-badge {
      padding: 5px 9px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      border: 1px solid var(--tapiz-border-strong);
    }
    .res-200 { color: var(--tapiz-success); background: var(--tapiz-success-soft); }
    .res-400 { color: #fbbf24; background: color-mix(in srgb, #fbbf24 12%, transparent); }
    .res-429, .res-500 { color: var(--tapiz-danger); background: var(--tapiz-danger-soft); }
    @media (max-width: 860px) {
      .hero { grid-template-columns: 1fr; }
      .topbar { align-items: flex-start; flex-wrap: wrap; }
      .topbar-badge { margin-left: 0; }
      .endpoint-header { grid-template-columns: auto 1fr auto; }
      .endpoint-desc { grid-column: 2 / 4; text-align: left; }
    }
  </style>
</head>
<body>
  <nav class="topbar">
    <div class="brand">
      <div class="brand-mark">T</div>
      <div class="brand-copy">
        <strong>Tapiz Mail API</strong>
        <span>Transactional Service</span>
      </div>
    </div>
    <div class="topbar-badge">10 req / 15 min</div>
  </nav>

  <main class="shell">
    <section class="hero">
      <article class="hero-panel">
        <div class="kicker">Docs / Service</div>
        <h1>Tapiz mail endpoints for auth and delivery flows.</h1>
        <p class="hero-copy">
          Microservice za slanje transakcionih poruka: 2FA kodovi, reset lozinke, izveštaji termina i licence.
          Vizuelni jezik i tokeni su usklađeni sa novim Tapiz design system-om.
        </p>
        <div class="hero-meta">
          <span class="meta-chip">Hono</span>
          <span class="meta-chip">SMTP / Nodemailer</span>
          <span class="meta-chip">API Key Protected</span>
          <span class="meta-chip">Vercel Ready</span>
        </div>
      </article>
      <aside class="hero-side">
        <strong>Šta je bitno</strong>
        <p>Sve <code>/api/mail/*</code> rute su iza API key zaštite i rate limiter-a.</p>
        <p>Servis graceful pada na in-memory limiter ako Redis/Valkey nije dostupan.</p>
        <p>Za health proveru koristi <code>GET /api/mail/health</code>.</p>
      </aside>
    </section>

    <section class="rate-card">
      <strong>Rate limit:</strong> 10 zahteva po IP adresi u 15 minuta na svim <code>/api/mail/*</code> rutama.
      Ako se limit pređe, servis vraća <strong>HTTP 429</strong>.
    </section>

    <div class="section-title">Utility</div>
    <div class="endpoint">
      <div class="endpoint-header" onclick="toggle(this)">
        <span class="method get">GET</span>
        <span class="path">/api/mail/health</span>
        <span class="endpoint-desc">Health check</span>
        <span class="chevron">▶</span>
      </div>
      <div class="endpoint-body">
        <p class="body-copy">Vraća <code>{"status":"ok","ts":"&lt;ISO timestamp&gt;"}</code> kada je servis aktivan.</p>
        <div class="response-list"><span class="response-badge res-200">200 OK</span></div>
      </div>
    </div>

    <div class="section-title">Authentication Email</div>
    <div class="endpoint">
      <div class="endpoint-header" onclick="toggle(this)">
        <span class="method post">POST</span>
        <span class="path">/api/mail/send-2fa</span>
        <span class="endpoint-desc">Slanje 2FA koda</span>
        <span class="chevron">▶</span>
      </div>
      <div class="endpoint-body">
        <p class="body-copy">Šalje stilizovan HTML e-mail sa šestocifrenim jednokratnim kodom.</p>
        <div class="schema-title">Request body</div>
        <table>
          <thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code class="field-code">to</code></td><td class="type">string</td><td><span class="tag req">req</span></td><td>Email primaoca</td></tr>
            <tr><td><code class="field-code">code</code></td><td class="type">string</td><td><span class="tag req">req</span></td><td>Šestocifreni kod</td></tr>
            <tr><td><code class="field-code">appName</code></td><td class="type">string</td><td><span class="tag opt">opt</span></td><td>Naziv aplikacije u poruci</td></tr>
          </tbody>
        </table>
        <div class="schema-title">Example request</div>
        <pre><code>{
  "to": "korisnik@uns.ac.rs",
  "code": "847291",
  "appName": "Tapiz"
}</code></pre>
        <div class="schema-title">Success response</div>
        <pre><code>{
  "success": true,
  "messageId": "&lt;abc123@smtp.uns.ac.rs&gt;",
  "message": "2FA code sent successfully"
}</code></pre>
        <div class="response-list">
          <span class="response-badge res-200">200 Sent</span>
          <span class="response-badge res-400">400 Validation</span>
          <span class="response-badge res-429">429 Limited</span>
          <span class="response-badge res-500">500 SMTP Error</span>
        </div>
      </div>
    </div>

    <div class="endpoint">
      <div class="endpoint-header" onclick="toggle(this)">
        <span class="method post">POST</span>
        <span class="path">/api/mail/send-reset-password</span>
        <span class="endpoint-desc">Reset lozinke</span>
        <span class="chevron">▶</span>
      </div>
      <div class="endpoint-body">
        <p class="body-copy">Šalje reset link za lozinku sa važenjem od 30 minuta.</p>
        <div class="response-list">
          <span class="response-badge res-200">200 Sent</span>
          <span class="response-badge res-400">400 Validation</span>
          <span class="response-badge res-429">429 Limited</span>
          <span class="response-badge res-500">500 SMTP Error</span>
        </div>
      </div>
    </div>

    <div class="section-title">Operational Email</div>
    <div class="endpoint">
      <div class="endpoint-header" onclick="toggle(this)">
        <span class="method post">POST</span>
        <span class="path">/api/mail/send-session-summary</span>
        <span class="endpoint-desc">Izveštaj prisustva</span>
        <span class="chevron">▶</span>
      </div>
      <div class="endpoint-body">
        <p class="body-copy">Šalje kratak rezime prisustva za jedan termin sa brojem prisutnih, odsutnih i ukupno upisanih.</p>
        <div class="response-list">
          <span class="response-badge res-200">200 Sent</span>
          <span class="response-badge res-400">400 Validation</span>
          <span class="response-badge res-429">429 Limited</span>
          <span class="response-badge res-500">500 SMTP Error</span>
        </div>
      </div>
    </div>

    <div class="endpoint">
      <div class="endpoint-header" onclick="toggle(this)">
        <span class="method post">POST</span>
        <span class="path">/api/mail/send-license</span>
        <span class="endpoint-desc">Licencni ključ</span>
        <span class="chevron">▶</span>
      </div>
      <div class="endpoint-body">
        <p class="body-copy">Šalje Tapiz licencni ključ sa planom, trial statusom i opcionalnim datumom isteka.</p>
        <div class="response-list">
          <span class="response-badge res-200">200 Sent</span>
          <span class="response-badge res-400">400 Validation</span>
          <span class="response-badge res-429">429 Limited</span>
          <span class="response-badge res-500">500 SMTP Error</span>
        </div>
      </div>
    </div>
  </main>

  <script>
    function toggle(header) {
      const body = header.nextElementSibling;
      const chevron = header.querySelector(".chevron");
      const isOpen = body.classList.contains("open");
      body.classList.toggle("open", !isOpen);
      chevron.classList.toggle("open", !isOpen);
    }
  </script>
</body>
</html>`;
