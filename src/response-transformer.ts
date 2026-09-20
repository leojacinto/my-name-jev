/**
 * Generative AI Custom LLM Transformer — RESPONSE
 * sys_generative_ai_custom_llm_transformer (scope: x_snc_jev)
 *
 * Generative AI Controller only accepts text responses (an array of strings).
 * Jev returns typed answers with calibrated probabilities:
 *   { model, answers: { answer: <value> }, usage: {...} }
 *
 * We flatten the typed answer into a single text line so it satisfies the
 * Controller's text-generation contract, while keeping the raw value visible.
 */

interface JevResponseTransformerInputs {
  response_body: string;
}

interface JevResponseBody {
  answers?: Record<string, unknown>;
  [key: string]: unknown;
}

declare var inputs: any;

(function (inputs: JevResponseTransformerInputs): string[] {
  var responseBody: JevResponseBody = JSON.parse(inputs.response_body);
  var responseTexts: string[] = [];

  var answers = responseBody.answers || {};
  var keys = Object.keys(answers);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    responseTexts.push(key + ': ' + JSON.stringify(answers[key]));
  }

  if (responseTexts.length === 0) {
    responseTexts.push('(no answer returned by Jev)');
  }

  return responseTexts;
})(inputs);
