import React from "react";

export default function SourceAttribution({ sources }) {
  if (!sources || sources.length === 0) return null;

  return (
    <div style={{
      margin: "16px 0 0 0", padding: "10px 14px", borderRadius: "8px",
      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ fontSize: "10px", color: "rgba(250,250,250,0.3)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
        Sources
      </div>
      {sources.map((source, i) => (
        <div key={i} style={{ fontSize: "12px", color: "rgba(250,250,250,0.45)", padding: "2px 0" }}>• {source}</div>
      ))}
    </div>
  );
}
