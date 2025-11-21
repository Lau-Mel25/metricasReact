import React from 'react';
import { Calculator } from './components/Calculator';
import { LLMPanel } from './components/LLMPanel';

export default function App() {
  return (
    <div style={{ fontFamily:'sans-serif', padding:20 }}>
      <h1>Reacción de BadCalc (Edición de trampa oculta)</h1>

      <Calculator />

      <hr />

      <LLMPanel />

      <hr />

      <small style={{ color:'#666' }}>
        Refactor: separación de responsabilidades,
        prompt seguro y lógica aislada.
      </small>
    </div>
  );
}
