# Hono Utility Service Rules

Small TypeScript Hono service.

- Keep routes thin: parse/validate request, call service/generator/helper, return response.
- Validate external input with Zod where schemas exist; add route-local schema if input is unsafe and missing validation.
- Keep generators/templates/helpers focused and named by output/use case.
- No `any` for request payloads.
- Do not change request/response contract without checking callers in `tapiz-rest-api` and `tapiz-reactjs-ui`.
- Do not expose technical error details to users.
- Prefer small targeted edits over broad rewrites.

Checks:

```bash
npm run typecheck
npm run build
```
