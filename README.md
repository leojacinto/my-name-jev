# jev-servicenow-transformers

TypeScript source for the ServiceNow **Generative AI Custom LLM Transformer** scripts that bridge [Jev](https://typesafe.ai) (TypeSafe AI's System One model) into ServiceNow's Generative AI Controller, since Jev returns typed/calibrated-probability answers rather than free text.

Deployed on `mememachine` in scope `x_snc_jev` as the "Jev Decision Check" AI Skill Kit skill, provider = Custom LLM Provider.

## Layout

- `src/request-transformer.ts` — parses the `TYPE:` / `INSTRUCTIONS:` / `STATE:` prompt convention into Jev's `{ state, model, questions }` request body.
- `src/response-transformer.ts` — flattens Jev's typed `answers` object into the string array the Controller expects.
- `dist/*.js` — compiled output. This is what actually gets pasted into the `sys_generative_ai_custom_llm_transformer` request/response script fields in ServiceNow, since those fields only execute plain JS.

## Build

```
npm install
npm run build
```

Paste the contents of `dist/request-transformer.js` and `dist/response-transformer.js` into the corresponding transformer script fields in ServiceNow after any change.

## Status

Skill is scaffolded and left in Draft with a placeholder API key. Swap in a real Jev key (from `console.typesafe.ai`) in the API Key Credential record before activating.
