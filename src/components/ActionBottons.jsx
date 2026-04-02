import React from "react";

export default function ActionButtons({ actions, accentColor }) {
  const color = accentColor || "#8B6914";

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "16px 0" }}>
      {actions.map((action, i) => (
        <button key={i} style={{
          padding: "10px 20px", borderRadius: "8px",
          border: `1px solid ${color}44`, background: `${color}11`,
          color: color, fontSize: "13px", fontWeight: 500,
          cursor: "pointer", transition: "all 0.2s ease", letterSpacing: "0.3px",
        }}
          onMouseEnter={(e) => { e.target.style.background = `${color}22`; e.target.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.target.style.background = `${color}11`; e.target.style.transform = "translateY(0)"; }}
        >
          {action}
        </button>
      ))}
    </div>
  );
}
