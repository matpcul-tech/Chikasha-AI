import { useState, useEffect } from 'react';

export default function LandingPage({ onEnter }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const features = [
    { icon: "𐒼", title: "Language Preservation", desc: "Learn Chikashshanompa' with AI-powered translation, pronunciation guides, and vocabulary — trained on the Nation's own language corpus.", color: "#C45A3C" },
    { icon: "◈", title: "Health Intelligence", desc: "Sovereign preventive care powered by longitudinal health data. Early detection. Cost avoidance. All on Nation infrastructure.", color: "#2D7A6F" },
    { icon: "⬡", title: "Citizen Services", desc: "Navigate housing, education, and benefits programs. AI-assisted eligibility checks and application support for enrolled citizens.", color: "#8B6914" },
    { icon: "◆", title: "Cultural Knowledge", desc: "Explore Chickasaw history, traditions, and heritage sourced from Nation archives and the Department of History & Culture.", color: "#6B4C8A" },
  ];

  const stats = [
    { value: "$1.75M", label: "Phase 1 Investment" },
    { value: "6 mo", label: "To Working Pilot" },
    { value: "14.7x", label: "Projected 5-Year ROI" },
    { value: "1st", label: "Tribal Sovereign AI" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#E8E4DD", overflow: "auto" }}>
      {/* Hero */}
      <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 24px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "140%", height: "80%", background: "radial-gradient(ellipse at center, rgba(196,90,60,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "30%", width: "60%", height: "50%", background: "radial-gradient(ellipse at center, rgba(45,122,111,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg, #C45A3C 0%, #8B2E1A 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: "0 8px 40px rgba(196,90,60,0.3)" }}>𐒼</div>
          </div>
          <div style={{ letterSpacing: 6, fontSize: 13, color: "#C45A3C", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Project Chikasha Ai</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,6vw,64px)", fontWeight: 800, lineHeight: 1.1, margin: "0 auto 24px", maxWidth: 700, color: "#FAFAFA" }}>
            Sovereign Intelligence<br />
            <span style={{ color: "#C45A3C" }}>for the Chickasaw Nation</span>
          </h1>
          <p style={{ fontSize: 18, color: "#9A968E", maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.6 }}>
            The Chikasha Foundational Model — an AI built by the Nation, for the Nation. It speaks Chikashshanompa'. It reflects Chickasaw values. It is owned permanently. Unconquered. Unconquerable.
          </p>
          <button onClick={onEnter} style={{
            background: "linear-gradient(135deg, #C45A3C 0%, #8B2E1A 100%)", border: "none", borderRadius: 12,
            padding: "16px 40px", fontSize: 16, fontWeight: 700, color: "#fff", cursor: "pointer",
            letterSpacing: 1, textTransform: "uppercase", boxShadow: "0 4px 30px rgba(196,90,60,0.35)", transition: "all .3s ease",
          }}
          onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.target.style.transform = "translateY(0)"}
          >Experience the Demo →</button>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 8px rgba(74,222,128,0.4)" }} />
            <span style={{ fontSize: 11, color: "#4ADE80", fontWeight: 600, letterSpacing: 2 }}>SOVEREIGN · TRACE FIBER NETWORK</span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ display: "flex", justifyContent: "center", gap: 0, borderTop: "1px solid #1a1a22", borderBottom: "1px solid #1a1a22", background: "#0D0D14" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ flex: 1, maxWidth: 200, padding: "28px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid #1a1a22" : "none" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 800, color: "#C45A3C" }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#777", marginTop: 4, letterSpacing: 1, textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ letterSpacing: 4, fontSize: 12, color: "#C45A3C", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>Four Pillars</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: "#FAFAFA", margin: 0 }}>What the CFM Can Do</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "#111118", border: "1px solid #1e1e2a", borderRadius: 14, padding: 28, transition: "all .3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + "60"; e.currentTarget.style.boxShadow = `0 4px 30px ${f.color}15`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2a"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: f.color, marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trifecta */}
      <div style={{ padding: "60px 24px 80px", background: "#0D0D14", borderTop: "1px solid #1a1a22" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ letterSpacing: 4, fontSize: 12, color: "#2D7A6F", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>Strategic Trifecta</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: "#FAFAFA", margin: "0 0 40px" }}>Why the Chickasaw Nation</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { t: "Language Corpus", d: "Rosetta Stone program, structured courses, native speaker recordings — production-ready AI training data that already exists.", c: "#C45A3C" },
              { t: "Trace Fiber Network", d: "100 Gbps sovereign backbone across 13 counties. Citizen data never leaves Nation-controlled infrastructure.", c: "#2D7A6F" },
              { t: "Institutional Strength", d: "CNI federal contracting, self-funded health system, Decade of Chickasaw Language — the infrastructure to execute.", c: "#8B6914" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#111118", border: "1px solid #1e1e2a", borderRadius: 12, padding: 24, textAlign: "left" }}>
                <div style={{ width: 4, height: 32, background: item.c, borderRadius: 2, marginBottom: 14 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: item.c, marginBottom: 8 }}>{item.t}</div>
                <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "60px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: "#666", fontStyle: "italic", maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.6 }}>
          "The nations that own their AI will write the terms of the digital future."
        </p>
        <button onClick={onEnter} style={{
          background: "transparent", border: "2px solid #C45A3C", borderRadius: 12,
          padding: "14px 36px", fontSize: 15, fontWeight: 700, color: "#C45A3C",
          cursor: "pointer", letterSpacing: 1, transition: "all .3s ease",
        }}
        onMouseEnter={e => { e.target.style.background = "#C45A3C"; e.target.style.color = "#fff"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#C45A3C"; }}
        >Try the Interactive Demo →</button>
        <div style={{ marginTop: 40, fontSize: 11, color: "#444", letterSpacing: 2 }}>
          PROJECT CHIKASHA AI · MATTHEW CULWELL · ENROLLED CHICKASAW CITIZEN
        </div>
      </div>
    </div>
  );
}
