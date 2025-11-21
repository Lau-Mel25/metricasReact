import React, { useState } from 'react';
import { parseNumber, computeOp } from '../services/calculator';
import { historyService } from '../services/history';

export function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [op, setOp] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function handleCompute() {
    try {
      setError(null);
      const A = parseNumber(a);
      const B = parseNumber(b);
      const r = computeOp(A, B, op);
      setResult(r);

      historyService.add({ a: A, b: B, op, result: r });
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  }

  return (
    <div style={{ display:'flex', gap:10 }}>
      <input value={a} onChange={e => setA(e.target.value)} placeholder="a" />
      <input value={b} onChange={e => setB(e.target.value)} placeholder="b" />

      <select value={op} onChange={e => setOp(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="^">^</option>
        <option value="%">%</option>
      </select>

      <button onClick={handleCompute}>=</button>

      <div style={{ minWidth:120 }}>
        {error ? "Error: " + error : "Resultado: " + result}
      </div>
    </div>
  );
}
