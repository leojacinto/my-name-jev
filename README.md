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

- AI Skill Kit skill "Jev Decision Check" — published, activated, provider = Custom LLM Provider. Still on a placeholder API key; swap in a real one (from `console.typesafe.ai`) in the API Key Credential record before it can make live calls.
- AI Agent Studio agent "AI Asset Maintenance Advisor (Jev)" — has an ACL, two tools (the Jev skill, and a Knowledge Graph lookup scoped to the platform Enterprise Graph).
- OneExtend capability "AI Asset Maintenance Advisor (Jev)" (script-include-backed, `JevAssetMaintenanceBridgeSNC`) so it's discoverable in Assistant Designer / promoted to Employee Slate — calls the Jev skill directly rather than the agent, since agent invocation (`startAiAgentConversation`) is async/conversational and this needs a synchronous answer.
