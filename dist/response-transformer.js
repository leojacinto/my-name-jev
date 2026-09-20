"use strict";
/**
 * Generative AI Custom LLM Transformer — RESPONSE
 * sys_generative_ai_custom_llm_transformer (scope: x_snc_jev)
 *
 * Matches the OpenRouter request in request-transformer.ts. OpenRouter returns
 * a standard chat-completions body: { choices: [{ message: { content } }] }.
 * The model is prompted to put a {"answer", "probability"} JSON object in
 * that content field; this pulls it out and flattens it into the string array
 * ServiceNow's Generative AI Controller expects.
 */
(function (inputs) {
    var responseBody = JSON.parse(inputs.response_body);
    var content = '';
    try {
        content = responseBody.choices[0].message.content;
    }
    catch (e) {
        return ['(no answer returned)'];
    }
    var parsed = null;
    try {
        var jsonMatch = content.match(/\{[\s\S]*\}/);
        parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
    }
    catch (e) {
        return [content];
    }
    return [
        'answer: ' + JSON.stringify(parsed.answer),
        'probability: ' + JSON.stringify(parsed.probability)
    ];
})(inputs);
