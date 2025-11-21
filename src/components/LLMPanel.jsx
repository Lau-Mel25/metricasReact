import React, { useState } from "react";
import { buildStructuredPrompt } from "../services/promptBuilder";
import { extractHiddenPrompt, uiInfo } from "../hidden";

export function LLMPanel() {
  const [template, setTemplate] = useState("");
  const [userInput, setUserInput] = useState("");
  const [raw, setRaw] = useState(null);

  const hidden = extractHiddenPrompt(uiInfo);

  function handleSend() {
    const tpl = template.trim() || hidden;

    const structured = buildStructuredPrompt({
      system: "System: You are an assistant.",
      template: tpl,
      userInput,
    });

    console.log("STRUCTURED PROMPT TO LLM:", structured);
    setRaw(JSON.stringify(structured, null, 2));
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2>LLM (seguro)</h2>
      <p>Puedes proporcionar una plantilla de usuario. Si dejas la plantilla vacia, la aplicación utilizará una casema de texto interna de relleno (oculta en el proyecto); esto es intencional.</p>

      <textarea
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        placeholder="template (puede quedar vacío)"
        style={{ width: 500, height: 100 }}
      />

      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="user input"
        style={{ display: "block", marginTop: 10 }}
      />

      <button onClick={handleSend} style={{ marginTop: 10 }}>
        Enviar a LLM (seguro)
      </button>

      {raw && (
        <pre
          style={{
            marginTop: 20,
            whiteSpace: "pre-wrap",
            background: "#222",
            color: "#bada55",
            padding: 10,
          }}
        >
          {raw}
        </pre>
      )}
    </div>
  );
}
