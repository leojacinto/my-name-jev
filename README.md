# Otto and Jev via AICT Knowledge Graph

Jev (TypeSafe AI System One) integration for ServiceNow, scope `x_snc_jev`.

## Layout

- `src/jev-decision-check-tool.ts` — source for the AI Agent Studio Script tool that calls Jev directly over HTTP.
- `dist/jev-decision-check-tool.js` — compiled output. Paste this into the tool's `script` field in ServiceNow after any change.
- `fluent-app/` — the ServiceNow Fluent-managed source of truth for the `x_snc_jev` scoped app on `mememachine`. Built via `now-sdk init --from`, so most of it is pulled instance metadata (`fluent-app/metadata/`), not hand-written Fluent TypeScript. New/removed records are tracked as Update Set XML under `metadata/update/`, except `fluent-app/src/fluent/actions/` which supports real Fluent TypeScript (`Action()` definitions).

## Build (tool script)

```
npm install
npm run build
```

Paste `dist/jev-decision-check-tool.js` into the tool's `script` field in ServiceNow.

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

- AI Agent Studio agent "AI Asset Maintenance Advisor using Jev" — has an ACL, two tools: "AICT Knowledge Graph Lookup" (scoped to the `AICT KG Data Agent` tag) and "Jev Decision Check (Script)".
- "Jev Decision Check (Script)" is a native Script-type tool (`sn_aia_tool.type = script`): it calls `POST https://api.typesafe.ai/v1/systemone` directly via `RESTMessageV2`, no AI Skill Kit / Custom LLM Provider / Generative AI Controller layer involved.
- Auth: `Authorization: Bearer <key>`, where `<key>` is read from the system property `x_snc_jev.typesafe_api_key` (plain string, not `password2`) — this instance has no KMF crypto module configured, so `password2` fields decrypt to null at runtime.
- Jev's question types are `noul` (yes/no; answer is a single 0–1 probability that the answer is "yes"), `choice`, and `score` — there is no `boolean` type. This tool always asks a `noul` question.
- Tool inputs: `instructions` (the question) and `state` (governance facts as plain text `key=value` pairs), both supplied by the agent from its own instructions/knowledge-graph step. Tool output: `{ answer, probability, status }`, where `answer` is `noul >= 0.5`.
- `fluent-app/metadata/update/sys_properties_309b45dc3b2f0f10cedd7ea693e45a67.xml` ships with a placeholder value — paste the real key in after installing, never commit it.
