export default function SovereignBadge() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", animation: "pulse 2s infinite" }} />
      <span style={{ fontSize: 10, color: "#4ADE80", fontWeight: 600, letterSpacing: 1 }}>SOVEREIGN</span>
    </div>
  );
}
