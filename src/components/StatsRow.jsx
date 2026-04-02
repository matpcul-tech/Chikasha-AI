import React from "react";

export default function StatsRow({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      gap: "12px", margin: "16px 0",
    }}>
      {stats.map((stat, i) => (
        <div key={i} style={{
          background: "rgba(45, 122, 111, 0.06)",
          border: "1px solid rgba(45, 122, 111, 0.12)",
          borderRadius: "10px", padding: "16px", textAlign: "center",
        }}>
          <div style={{ fontSize: "24px", fontWeight: 700, color: "#2D7A6F", lineHeight: 1, marginBottom: "4px" }}>{stat.value}</div>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(250,250,250,0.7)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>{stat.label}</div>
          <div style={{ fontSize: "10px", color: "rgba(250,250,250,0.35)" }}>{stat.sub}</div>
        </div>
      ))}
    </div>
  );
}
