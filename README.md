# jev

Jev (TypeSafe AI System One) integration for ServiceNow, scope `x_snc_jev`.

## Layout

- `src/request-transformer.ts` / `src/response-transformer.ts` — Custom LLM Transformer scripts. Parse the `TYPE:` / `INSTRUCTIONS:` / `STATE:` prompt convention into Jev's `{ state, model, questions }` request, flatten the typed answer back into the string array ServiceNow's Generative AI Controller expects.
- `dist/*.js` — compiled output of the two files above. Paste this into the `sys_generative_ai_custom_llm_transformer` request/response fields in ServiceNow after any change (that field only runs plain JS).
- `src/evaluate-jev.ts` — calls Jev directly via Vercel AI Gateway (`ai` SDK 7 `experimental_evaluate` + `@ai-sdk/gateway`), bypassing ServiceNow. Needs `AI_GATEWAY_API_KEY` in the environment.
- `fluent-app/` — the ServiceNow Fluent-managed source of truth for the `x_snc_jev` scoped app on `mememachine`. Built via `now-sdk init --from`, so most of it is pulled instance metadata (`fluent-app/metadata/`), not hand-written Fluent TypeScript — the SDK's TS compile step doesn't run for apps converted this way, so new records there are added as Update Set XML directly under `metadata/update/`.

## Build (transformer scripts)

```
npm install
npm run build
```

Paste `dist/request-transformer.js` / `dist/response-transformer.js` into ServiceNow.

## Evaluate Jev via Vercel Gateway

```
AI_GATEWAY_API_KEY=<key> npm run evaluate:jev
```

## Rebuild / redeploy the ServiceNow app (fluent-app/)

```
cd fluent-app
npm install
SN_SDK_NODE_ENV=SN_SDK_CI_INSTALL SN_SDK_AUTH_TYPE=basic \
SN_SDK_INSTANCE_URL=<instance url> SN_SDK_USER=<user> SN_SDK_USER_PWD=<password> \
npx @servicenow/sdk build .
npx @servicenow/sdk install --source .
```

Credentials are read from env vars only — nothing is stored in this repo.

## What's on the instance

- AI Agent Studio agent "AI Asset Maintenance Advisor using Jev" — has an ACL, two tools: "Jev Decision Check Skill" and "AICT Knowledge Graph Lookup" (scoped to the `AICT KG Data Agent` tag).
- AI Skill Kit skill "Jev Decision Check" — published, activated, provider = Custom LLM Provider ("Jev Connection" / model `jev-latest`).
- The Custom LLM Provider's connection currently points at OpenRouter (`openrouter.ai/api/v1/chat/completions`, model `openai/gpt-4o-mini`), not TypeSafe's own `api.typesafe.ai` endpoint — the real TypeSafe key was never obtained, so the request/response transformers were rewritten to speak OpenRouter's chat-completions format and prompt the model to return the same `{answer, probability}` shape the agent instructions expect.
- Auth for that connection uses a `sys_generative_ai_custom_header_api_key_credentials` record (header `Authorization`, value `Bearer <key>`), not the generic `api_key_credentials` class — the generic class falls back to HTTP Basic Auth for this flow regardless of its header-name field, which OpenRouter rejects.
- To point this back at real TypeSafe/Jev instead of OpenRouter: change the connection's URL back to `https://api.typesafe.ai/v1/systemone`, restore the original request/response transformer bodies (the `{state, questions}` / `{answers}` shape — see git history), and put a real TypeSafe key in the credential.
- `fluent-app/metadata/update/sys_generative_ai_custom_header_api_key_credentials_*.xml` ships with a placeholder value in `api_key` — paste the real key in after installing, never commit it.
