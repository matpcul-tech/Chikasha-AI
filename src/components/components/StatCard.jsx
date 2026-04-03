import { useState, useEffect } from 'react';

export default function StatCard({ stat, color, delay }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);

  return (
    <div style={{
      background: "#161520", border: "1px solid #2a2838", borderRadius: 12,
      padding: "14px 10px", textAlign: "center", opacity: show ? 1 : 0,
      transform: show ? "scale(1)" : "scale(.9)",
      transition: "all .5s cubic-bezier(.34,1.56,.64,1)",
    }}>
      <div style={{ fontSize: 26, fontWeight: 800, color, fontFamily: "'Playfair Display',serif" }}>{stat.value}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#e8e4dd", marginTop: 3 }}>{stat.label}</div>
      <div style={{ fontSize: 11, color: "#888" }}>{stat.sub}</div>
    </div>
  );
}
