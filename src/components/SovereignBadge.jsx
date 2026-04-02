import React from "react";

export default function SovereignBadge() {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "6px",
      padding: "6px 12px", borderRadius: "6px",
      background: "rgba(45, 122, 111, 0.08)",
      border: "1px solid rgba(45, 122, 111, 0.15)",
    }}>
      <div style={{
        width: "5px", height: "5px", borderRadius: "50%",
        background: "#2D7A6F",
        boxShadow: "0 0 6px rgba(45, 122, 111, 0.4)",
      }} />
      <span style={{
        fontSize: "10px", color: "rgba(45, 122, 111, 0.7)",
        letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500,
      }}>
        Sovereign · Nation-Controlled · Encrypted
      </span>
    </div>
  );
}
