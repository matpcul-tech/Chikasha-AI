import React, { useState } from "react";

export default function PhraseCards({ phrases, accentColor }) {
  const [playingIndex, setPlayingIndex] = useState(null);
  const color = accentColor || "#C45A3C";

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setTimeout(() => setPlayingIndex(null), 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "12px 0" }}>
      {phrases.map((phrase, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: "12px",
          padding: "12px 16px", borderRadius: "10px",
          background: `${color}08`, border: `1px solid ${color}18`,
          transition: "all 0.2s ease",
        }}>
          <button onClick={() => handlePlay(i)} style={{
            width: "32px", height: "32px", borderRadius: "50%",
            border: `1px solid ${color}44`,
            background: playingIndex === i ? `${color}22` : "transparent",
            color: color, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", flexShrink: 0, transition: "all 0.2s ease",
          }}>
            {playingIndex === i ? "◼" : "▶"}
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, color: color, fontSize: "15px" }}>{phrase.chickasaw}</span>
              <span style={{ fontSize: "12px", color: "rgba(250,250,250,0.35)", fontStyle: "italic" }}>{phrase.pronunciation}</span>
            </div>
            <div style={{ fontSize: "13px", color: "rgba(250,250,250,0.55)", marginTop: "2px" }}>{phrase.english}</div>
          </div>
          {playingIndex === i && (
            <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              {[1, 2, 3, 4].map((bar) => (
                <div key={bar} style={{
                  width: "2px", background: color, borderRadius: "1px",
                  animation: `waveform 0.6s ease-in-out ${bar * 0.1}s infinite alternate`,
                }} />
              ))}
            </div>
          )}
        </div>
      ))}
      <style>{`@keyframes waveform { 0% { height: 4px; } 100% { height: 16px; } }`}</style>
    </div>
  );
}
