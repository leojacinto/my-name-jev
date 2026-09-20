/**
 * Generative AI Custom LLM Transformer — REQUEST
 * sys_generative_ai_custom_llm_transformer (scope: x_snc_jev)
 *
 * Jev (TypeSafe System One) does not take a free-text prompt. It takes:
 *   { state: <content to evaluate>, model: "jev-latest", questions: { <id>: { type, instructions } } }
 *
 * Generative AI Controller only gives us one rendered prompt string (promptData.prompt),
 * built from the skill's Prompt template field. To carry the question type/instructions
 * through that single string, the prompt template must be authored in this convention:
 *
 *   TYPE:<noul|choice|score>
 *   INSTRUCTIONS:<question text>
 *   STATE:{{inputAttribute}}
 *
 * This transformer parses that convention back into Jev's real request shape.
 */

interface JevPromptData {
  prompt?: string;
}

interface JevRequestTransformerInputs {
  prompt_data: JevPromptData;
}

interface JevQuestion {
  type: string;
  instructions: string;
}

interface JevRequestBody {
  model: string;
  state: string;
  questions: {
    answer: JevQuestion;
  };
}

interface JevRequestTransformerOutput {
  body: JevRequestBody;
  headers: Record<string, string>;
}

declare var inputs: any;

(function (inputs: JevRequestTransformerInputs): JevRequestTransformerOutput {
  var promptData = inputs.prompt_data;
  var prompt = promptData.prompt || '';

  var typeMatch = prompt.match(/TYPE:(.*)/);
  var instructionsMatch = prompt.match(/INSTRUCTIONS:(.*)/);
  var stateMatch = prompt.match(/STATE:([\s\S]*)/);

  var questionType = typeMatch ? typeMatch[1].trim() : 'noul';
  var instructions = instructionsMatch ? instructionsMatch[1].trim() : prompt;
  var state = stateMatch ? stateMatch[1].trim() : prompt;

  var body: JevRequestBody = {
    model: 'jev-latest',
    state: state,
    questions: {
      answer: {
        type: questionType,
        instructions: instructions
      }
    }
  };

  var headers: Record<string, string> = {};

  return {
    body: body,
    headers: headers
  };
})(inputs);
