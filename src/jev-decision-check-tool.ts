/**
 * AI Agent Studio Script tool — "Jev Decision Check (Script)"
 * sn_aia_tool (scope: x_snc_jev), type: script
 *
 * Calls real Jev (TypeSafe System One), POST https://api.typesafe.ai/v1/systemone,
 * directly over HTTP. Pasted as-is into the tool's `script` field (that field runs
 * plain JS).
 *
 * The API key is read from the system property x_snc_jev.typesafe_api_key (plain
 * string, not password2) because this instance has no KMF crypto module configured,
 * so password2 fields decrypt to null at runtime.
 */

interface JevToolInputs {
  instructions: string;
  state: string;
}

interface JevRequestBody {
  state: string;
  model: string;
  questions: {
    answer: {
      type: string;
      instructions: string;
    };
  };
}

interface JevAnswer {
  type?: string;
  noul?: number;
}

interface JevResponseBody {
  answers?: {
    answer?: JevAnswer;
  };
}

interface JevToolOutput {
  answer: string;
  probability: string;
  status: string;
  error?: string;
}

declare var inputs: JevToolInputs;
declare var gs: any;
declare var sn_ws: any;

(function (inputs: JevToolInputs): JevToolOutput {
  var apiKey = gs.getProperty('x_snc_jev.typesafe_api_key', '');

  var requestBody: JevRequestBody = {
    state: inputs.state,
    model: 'jev-latest',
    questions: {
      answer: {
        type: 'noul',
        instructions: inputs.instructions
      }
    }
  };

  var request = new sn_ws.RESTMessageV2();
  request.setHttpMethod('POST');
  request.setEndpoint('https://api.typesafe.ai/v1/systemone');
  request.setRequestHeader('Authorization', 'Bearer ' + apiKey);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestBody(JSON.stringify(requestBody));

  var response = request.execute();
  var body: string = response.getBody();

  try {
    var parsed: JevResponseBody = JSON.parse(body);
    var noul = parsed.answers!.answer!.noul!;
    return {
      answer: (noul >= 0.5) ? 'true' : 'false',
      probability: String(noul),
      status: 'success'
    };
  } catch (e) {
    return {
      answer: '',
      probability: '',
      status: 'error',
      error: String(e) + ' | body: ' + body
    };
  }
})(inputs);
