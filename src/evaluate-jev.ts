/**
 * Calls Jev (TypeSafe System One) directly through Vercel's AI Gateway,
 * using the AI SDK's experimental evaluate() API instead of a raw HTTP
 * call to api.typesafe.ai. This is a local/dev path — it runs in Node,
 * not inside ServiceNow (the sys_generative_ai_custom_llm_transformer
 * scripts still use the plain-JS approach in request/response-transformer.ts
 * since ServiceNow's server-side sandbox can't load npm packages).
 *
 * Requires AI_GATEWAY_API_KEY in the environment (Vercel AI Gateway token).
 *
 * Question types are exactly 'boolean' | 'choice' | 'score' — there is no
 * 'noul' type; that was an incorrect placeholder used in the ServiceNow-side
 * prompt convention before this was verified against the real SDK types.
 */
import { experimental_evaluate as evaluate } from 'ai';
import { gateway } from '@ai-sdk/gateway';

async function main() {
  const state = process.argv[2] ?? 'AI model "fraud-risk-scorer-v3" was last certified 14 months ago. Its owning team has had no activity on it in 6 months, and it has zero inference calls in the last 90 days.';

  const result = await evaluate({
    model: gateway.evaluationModel('typesafe-ai/jev'),
    state,
    questions: {
      shouldRetire: {
        type: 'boolean',
        instructions: 'Should this AI asset be retired due to being dormant and out of certification?',
      },
    },
  });

  console.log(JSON.stringify(result.answers, null, 2));
  console.log('usage:', result.usage);
  const confidence = (result.providerMetadata as Record<string, Record<string, unknown>> | undefined)?.typesafe?.confidence;
  console.log('confidence:', confidence);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
