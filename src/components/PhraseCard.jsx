import { useState, useEffect } from 'react';

export default function PhraseCard({ phrase, color, delay }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);

  return (
    <div style={{
      background: `${color}14`, border: `1px solid ${color}30`, borderRadius: 10,
      padding: "12px 14px", opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(8px)", transition: "all .4s ease",
    }}>
      <div style={{ fontSize: 17, fontWeight: 700, color, fontFamily: "'Playfair Display',serif" }}>{phrase.chickasaw}</div>
      <div style={{ fontSize: 11, color: "#888", fontStyle: "italic", marginTop: 2 }}>/{phrase.pronunciation}/</div>
      <div style={{ fontSize: 13, color: "#ddd", marginTop: 4 }}>{phrase.english}</div>
      <button style={{
        marginTop: 8, background: `${color}22`, border: `1px solid ${color}44`,
        borderRadius: 6, padding: "3px 10px", fontSize: 11, color, cursor: "pointer", fontWeight: 600,
      }}>🔊 Listen</button>
    </div>
  );
}
