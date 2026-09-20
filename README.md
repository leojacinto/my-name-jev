# jev-servicenow-transformers

TypeScript source for the ServiceNow **Generative AI Custom LLM Transformer** scripts that bridge [Jev](https://typesafe.ai) (TypeSafe AI's System One model) into ServiceNow's Generative AI Controller, since Jev returns typed/calibrated-probability answers rather than free text.

Deployed on a ServiceNow dev instance in scope `x_snc_jev` as the "Jev Decision Check" AI Skill Kit skill, provider = Custom LLM Provider.

## Layout

- `src/request-transformer.ts` — parses the `TYPE:` / `INSTRUCTIONS:` / `STATE:` prompt convention into Jev's `{ state, model, questions }` request body.
- `src/response-transformer.ts` — flattens Jev's typed `answers` object into the string array the Controller expects.
- `dist/*.js` — compiled output. This is what actually gets pasted into the `sys_generative_ai_custom_llm_transformer` request/response script fields in ServiceNow, since those fields only execute plain JS.
- `src/asset-maintenance-agent.ts` — [ServiceNow Fluent](https://www.servicenow.com/docs/bundle/latest/page/build/servicenow-sdk/concept/servicenow-fluent.html) source documenting the AI Agent Studio wiring (agent + tools) applied to `mememachine`. Type-checks against the real `@servicenow/sdk` types but was applied via the Table API directly, not `now-sdk build`/`deploy`.

## Build

```
npm install
npm run build            # compiles the transformer scripts to dist/*.js
npm run typecheck:fluent # type-checks the Fluent agent source against @servicenow/sdk
```

Paste the contents of `dist/request-transformer.js` and `dist/response-transformer.js` into the corresponding transformer script fields in ServiceNow after any change.

## Status

- Skill scaffolded, prompt finalized, published, and activated.
- "AI Asset Maintenance Advisor (Jev)" AI Agent created in AI Agent Studio with two tools: the Jev Decision Check skill, and a Knowledge Graph lookup scoped to the platform Enterprise Graph (the same graph AICT's own "AICT KG Data Agent" tag scopes via a filter set not exposed on this generic tool type).
- Still on a placeholder API key. Swap in a real Jev key (from `console.typesafe.ai`) in the API Key Credential record before activating live calls.
