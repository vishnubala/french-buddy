/* speaking/assess.mjs — the ONLY place the Azure Speech SDK is referenced.

   The SDK is loaded via a DYNAMIC import() (§3 amendment): Vite code-splits it
   into a chunk that downloads only when a learner actually records, so Le Cours
   and every other L'Entraînement module never pay its cost. Nothing else in the
   app imports the SDK — keep it that way.

   Auth is KEY-DIRECT (SpeechConfig.fromSubscription with the learner's own BYO
   key from Settings): the SDK streams over a WebSocket (dodging the undocumented
   recognition-endpoint CORS) and refreshes internally, so we avoid the token
   host-scoping footgun. fr-FR gives WORD-LEVEL scoring only — no phoneme/prosody
   — so we request Granularity=Word and never surface phoneme claims.

   assessSpeaking() resolves with the SAME shape the session-2 mock produced:
     { pronScore, accuracy, fluency, completeness,
       words:[{ w, accuracyScore, errorType:"None"|"Mispronunciation"|"Omission"|"Insertion" }] }
   so the render branch in main.js consumes it UNCHANGED. On failure it rejects
   with a typed { kind, message } (French, non-destructive) for the error table. */

let recognizer = null;   /* the in-flight recognizer, so the caller can abort + release the mic on leave */

/* Feature-detect: no getUserMedia → no read-aloud (the record button is disabled
   with a message rather than throwing when pressed). */
export function micSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

/* Called from stopSpeaking() in main.js on any nav-away / retry — closes the
   recognizer, which releases the microphone. */
export function stopAssessment() {
  if (recognizer) { try { recognizer.close(); } catch {} recognizer = null; }
}

/* Map the raw pronunciation-assessment JSON (NBest[0]) to our result shape.
   Returns null if there's no usable NBest entry. */
function mapAssessment(json) {
  const nb = json && Array.isArray(json.NBest) ? json.NBest[0] : null;
  if (!nb) return null;
  const pa = nb.PronunciationAssessment || nb;   /* SDK nests scores; REST puts some at NBest level */
  const words = (nb.Words || []).map(w => {
    const wpa = w.PronunciationAssessment || {};
    return {
      w: w.Word,
      accuracyScore: typeof wpa.AccuracyScore === "number" ? wpa.AccuracyScore : 0,
      errorType: wpa.ErrorType || "None",
    };
  });
  return {
    pronScore: Math.round(pa.PronScore ?? 0),
    accuracy: Math.round(pa.AccuracyScore ?? 0),
    fluency: Math.round(pa.FluencyScore ?? 0),
    completeness: Math.round(pa.CompletenessScore ?? 0),
    words,
  };
}

/* Turn a service cancellation into a typed, honest error message. */
function cancelToError(cd, SDK) {
  const details = String((cd && cd.errorDetails) || "").toLowerCase();
  const code = cd && cd.errorCode;
  const EC = SDK.CancellationErrorCode || {};
  if (code === EC.AuthenticationFailure ||
      details.includes("401") || details.includes("403") ||
      details.includes("forbidden") || details.includes("unauthor"))
    return { kind: "auth", message: "Clé refusée par Azure. Vérifie ta clé (et la région) dans les Réglages." };
  if (details.includes("microphone") || details.includes("permission") ||
      details.includes("notallowed") || details.includes("audio input"))
    return { kind: "mic", message: "Micro indisponible ou refusé. Autorise le micro dans ton navigateur, puis réessaie." };
  if (code === EC.ConnectionFailure || code === EC.ServiceTimeout ||
      details.includes("connection") || details.includes("network") || details.includes("timeout"))
    return { kind: "network", message: "Azure n'a pas répondu (réseau). Réessaie dans un instant." };
  return { kind: "canceled", message: "Azure n'a pas répondu. Réessaie dans un instant." };
}

/* Run one read-aloud assessment. `item` = { say, … } (item.say is the reference
   text); `creds` = { key, region } from getAzureCreds(). */
export async function assessSpeaking(item, creds) {
  const key = (creds && creds.key) || "";
  const region = (creds && creds.region) || "";
  if (!key || !region) throw { kind: "nokey", message: "Ajoute ta clé Azure dans les Réglages pour t'entraîner." };
  if (!micSupported()) throw { kind: "nomic", message: "Ton navigateur ne permet pas l'enregistrement audio." };

  const mod = await import("microsoft-cognitiveservices-speech-sdk");
  const SDK = mod && mod.SpeechConfig ? mod : (mod.default || mod);   /* CJS/ESM interop */

  return new Promise((resolve, reject) => {
    let rec;
    try {
      const speechConfig = SDK.SpeechConfig.fromSubscription(key, region);
      speechConfig.speechRecognitionLanguage = "fr-FR";
      const audioConfig = SDK.AudioConfig.fromDefaultMicrophoneInput();
      const paConfig = new SDK.PronunciationAssessmentConfig(
        item.say,
        SDK.PronunciationAssessmentGradingSystem.HundredMark,
        SDK.PronunciationAssessmentGranularity.Word,
        true,   /* enableMiscue → Omission / Insertion error types */
      );
      rec = new SDK.SpeechRecognizer(speechConfig, audioConfig);
      paConfig.applyTo(rec);
    } catch (e) {
      reject({ kind: "init", message: "Le micro n'a pas pu démarrer. Vérifie les autorisations du navigateur, puis réessaie." });
      return;
    }
    recognizer = rec;
    const done = () => { try { rec.close(); } catch {} if (recognizer === rec) recognizer = null; };

    rec.recognizeOnceAsync(
      result => {
        try {
          if (result.reason === SDK.ResultReason.RecognizedSpeech) {
            const raw = result.properties.getProperty(SDK.PropertyId.SpeechServiceResponse_JsonResult) || "{}";
            const mapped = mapAssessment(JSON.parse(raw));
            done();
            if (mapped) resolve(mapped);
            else reject({ kind: "nomatch", message: "On n'a rien entendu clairement — réessaie en parlant plus près du micro." });
          } else if (result.reason === SDK.ResultReason.NoMatch) {
            done();
            reject({ kind: "nomatch", message: "On n'a rien entendu — réessaie en parlant plus fort, plus près du micro." });
          } else if (result.reason === SDK.ResultReason.Canceled) {
            const cd = SDK.CancellationDetails.fromResult(result);
            done();
            reject(cancelToError(cd, SDK));
          } else {
            done();
            reject({ kind: "unknown", message: "Une erreur est survenue. Réessaie." });
          }
        } catch (e) {
          done();
          reject({ kind: "parse", message: "Réponse illisible d'Azure. Réessaie." });
        }
      },
      err => {
        done();
        const s = String(err || "").toLowerCase();
        if (s.includes("permission") || s.includes("microphone") || s.includes("notallowed") || s.includes("denied"))
          reject({ kind: "mic", message: "Micro refusé. Autorise le micro dans ton navigateur, puis réessaie." });
        else
          reject({ kind: "network", message: "Azure n'a pas répondu. Réessaie dans un instant." });
      },
    );
  });
}
