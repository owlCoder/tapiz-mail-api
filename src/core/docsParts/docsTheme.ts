export const docsThemeCss = `
  :root {
    color-scheme: dark;
    --color-ink-100: #06080c;
    --color-ink-200: #0c0f16;
    --color-ink-300: #11151e;
    --color-ink-400: #1d222d;
    --color-border: #1d2330;
    --color-border-hi: #2a3346;
    --color-txt-1: #f1f4f9;
    --color-txt-2: #aab3c2;
    --color-txt-3: #7f8a9b;
    --color-txt-4: #667185;
    --color-primary-300: #5ee7ff;
    --color-primary-500: #1eb5d4;
    --color-primary-700: #0e7088;
    --color-primary-950: #03161c;
    --color-signal-400: #d4ff3a;
    --color-good: #4dd6a3;
    --color-warn: #ff7a4d;

    --tapiz-bg-page: var(--color-ink-100);
    --tapiz-bg-surface: var(--color-ink-200);
    --tapiz-bg-surface-muted: var(--color-ink-300);
    --tapiz-bg-surface-raised: #10151f;
    --tapiz-border-subtle: var(--color-border);
    --tapiz-border-strong: var(--color-border-hi);
    --tapiz-text-primary: var(--color-txt-1);
    --tapiz-text-secondary: var(--color-txt-2);
    --tapiz-text-muted: var(--color-txt-3);
    --tapiz-text-disabled: var(--color-txt-4);
    --tapiz-accent: var(--color-primary-300);
    --tapiz-accent-soft: color-mix(in srgb, var(--color-primary-300) 12%, transparent);
    --tapiz-success: var(--color-good);
    --tapiz-success-soft: color-mix(in srgb, var(--color-good) 12%, transparent);
    --tapiz-danger: var(--color-warn);
    --tapiz-danger-soft: color-mix(in srgb, var(--color-warn) 14%, transparent);
    --tapiz-signal: var(--color-signal-400);
    --tapiz-signal-soft: color-mix(in srgb, var(--color-signal-400) 12%, transparent);
    --font-display: "IBM Plex Sans", system-ui, sans-serif;
    --font-body: "IBM Plex Sans", system-ui, sans-serif;
    --font-mono: "IBM Plex Mono", ui-monospace, monospace;
    --tapiz-shadow-sm: 0 14px 32px rgba(0, 0, 0, 0.22);
    --tapiz-shadow-brutal: 8px 8px 0 rgba(6, 8, 12, 0.6);
  }
`;
