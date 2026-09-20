/**
 * Generative AI Custom LLM Transformer — REQUEST
 * sys_generative_ai_custom_llm_transformer (scope: x_snc_jev)
 *
 * The connection behind this transformer currently points at OpenRouter
 * (openrouter.ai/api/v1/chat/completions, model openai/gpt-4o-mini), not at
 * Jev's own API — a real TypeSafe key was never obtained. This builds a
 * standard OpenRouter chat-completions request and asks the model to answer
 * in the same shape Jev itself would: {"answer": true|false, "probability": 0-1}.
 *
 * Generative AI Controller only gives us one rendered prompt string
 * (promptData.prompt), built from the skill's Prompt template field, using
 * the convention:
 *
 *   TYPE:<boolean|choice|score>
 *   INSTRUCTIONS:<question text>
 *   STATE:<facts to evaluate>
 *
 * To point this at real Jev instead of OpenRouter: change the connection URL
 * back to https://api.typesafe.ai/v1/systemone, put a real TypeSafe key in
 * the credential, and swap this body back to Jev's own shape:
 *   { state, model: "jev-latest", questions: { answer: { type, instructions } } }
 */

interface JevPromptData {
  prompt?: string;
}

interface JevRequestTransformerInputs {
  prompt_data: JevPromptData;
}

interface ChatMessage {
  role: string;
  content: string;
}

interface OpenRouterRequestBody {
  model: string;
  messages: ChatMessage[];
}

interface JevRequestTransformerOutput {
  body: OpenRouterRequestBody;
  headers: Record<string, string>;
}

declare var inputs: any;

(function (inputs: JevRequestTransformerInputs): JevRequestTransformerOutput {
  var promptData = inputs.prompt_data;
  var prompt = promptData.prompt || '';

  var typeMatch = prompt.match(/TYPE:(.*)/);
  var instructionsMatch = prompt.match(/INSTRUCTIONS:(.*)/);
  var stateMatch = prompt.match(/STATE:([\s\S]*)/);

  var questionType = typeMatch ? typeMatch[1].trim() : 'boolean';
  var instructions = instructionsMatch ? instructionsMatch[1].trim() : prompt;
  var state = stateMatch ? stateMatch[1].trim() : prompt;

  var systemPrompt =
    'You are a calibrated decision engine. Given a governance question and the known facts (STATE), ' +
    'answer with a single JSON object only, no other text: {"answer": true or false, "probability": a number ' +
    'between 0 and 1 representing your calibrated confidence}. Question type: ' + questionType + '.';
  var userPrompt = 'INSTRUCTIONS: ' + instructions + '\nSTATE: ' + state;

  var body: OpenRouterRequestBody = {
    model: 'openai/gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ]
  };

  var headers: Record<string, string> = {};

  return {
    body: body,
    headers: headers
  };
})(inputs);
