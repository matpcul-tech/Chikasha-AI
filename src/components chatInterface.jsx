import { useState, useEffect, useRef, useCallback } from 'react';
import { MODULES } from '../data/modules.js';
import { CONVERSATIONS } from '../data/conversations.js';
import TypeWriter from './TypeWriter.jsx';
import PhraseCard from './PhraseCard.jsx';
import StatCard from './StatCard.jsx';
import SovereignBadge from './SovereignBadge.jsx';

export default function ChatInterface({ onBack }) {
  const [activeModule, setActiveModule] = useState("language");
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [extras, setExtras] = useState({});
  const chatEnd = useRef(null);
  const mod = MODULES[activeModule];

  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping, extras]);

  const send = useCallback((text) => {
    const q = text || inputVal;
    if (!q.trim() || isTyping) return;
    setInputVal("");
    const uid = Date.now();
    setMessages(p => [...p, { id: uid, role: "user", text: q }]);
    setIsTyping(true);
    setTimeout(() => {
      const convos = CONVERSATIONS[activeModule];
      const used = messages.filter(m => m.role === "assistant").length;
      const sel = convos[used % convos.length];
      const aid = Date.now() + 1;
      setMessages(p => [...p, { id: aid, role: "assistant", text: sel.response.text, data: sel.response, module: activeModule }]);
      setIsTyping(false);
    }, 1100);
  }, [inputVal, isTyping, activeModule, messages]);

  const switchMod = (k) => { setActiveModule(k); setMessages([]); setExtras({}); };
  const suggestions = CONVERSATIONS[activeModule]?.map(c => c.prompts[0]) || [];
  const usedQ = messages.filter(m => m.role === "user").map(m => m.text);

  return (
    <div style={{ "--accent": mod.color, background: "#0C0B0F", color: "#E8E4DD", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ padding: "12px 18px", borderBottom: "1px solid #2a2835", background: "#131218", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <button onClick={onBack} style={{ background: "none", border: "1px solid #2a2835", borderRadius: 8, padding: "4px 10px", color: "#888", fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>← Back</button>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: mod.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, boxShadow: `0 4px 18px ${mod.color}30`, transition: "all .4s" }}>{mod.icon}</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700 }}>CHIKASHA <span style={{ color: mod.color, transition: "color .3s" }}>AI</span></div>
            <div style={{ fontSize: 10, color: "#888", letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>Chikasha Foundational Model — Demo</div>
          </div>
          <div style={{ marginLeft: "auto" }}><SovereignBadge /></div>
        </div>
        <div style={{ display: "flex", gap: 6, overflow: "auto" }}>
          {Object.entries(MODULES).map(([k, m]) => {
            const a = activeModule === k;
            return (
              <button key={k} onClick={() => switchMod(k)} style={{
                border: `1px solid ${a ? m.color : "#2a2835"}`, background: a ? `${m.color}15` : "#131218",
                borderRadius: 10, padding: "7px 12px", cursor: "pointer", textAlign: "left", flex: 1, minWidth: 0,
                transition: "all .3s", boxShadow: a ? `0 0 14px ${m.color}15` : "none",
              }}>
                <div style={{ fontSize: 13 }}>{m.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: a ? m.color : "#E8E4DD", whiteSpace: "nowrap" }}>{m.name}</div>
                <div style={{ fontSize: 9, color: "#888", whiteSpace: "nowrap" }}>{m.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.length === 0 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, animation: "fadeUp .6s ease" }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: mod.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, boxShadow: `0 8px 36px ${mod.color}25`, transition: "all .4s" }}>{mod.icon}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700 }}>{mod.name}</div>
            <div style={{ fontSize: 13, color: "#888", maxWidth: 340, lineHeight: 1.5 }}>
              {activeModule === "language" && "Ask me anything about Chikashshanompa'. Translation, pronunciation, vocabulary — trained on the Nation's language corpus."}
              {activeModule === "health" && "Sovereign health intelligence. Preventive care, community health trends, and screenings — all on Nation infrastructure."}
              {activeModule === "citizen" && "Navigate Chickasaw Nation programs and services. Applications, eligibility, and connecting you to the right resources."}
              {activeModule === "cultural" && "Explore the history, traditions, and heritage of the Chickasaw people. Sourced from Nation archives and cultural departments."}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 460 }}>
              {suggestions.map((q, i) => (
                <button key={i} onClick={() => send(q)} className="suggestion-chip" style={{ background: "#131218", border: "1px solid #2a2835", borderRadius: 20, padding: "8px 16px", color: "#888", fontSize: 13, cursor: "pointer", whiteSpace: "nowrap", transition: "all .2s" }}
                  onMouseEnter={e => { e.target.style.borderColor = mod.color; e.target.style.color = "#E8E4DD"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "#2a2835"; e.target.style.color = "#888"; }}
                >{q}</button>
              ))}
            </div>
          </div>
        )}

        {messages.map(msg => {
          const mm = MODULES[msg.module || activeModule] || mod;
          return (
            <div key={msg.id} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", gap: 10, animation: "fadeUp .4s ease" }}>
              {msg.role === "assistant" && (
                <div style={{ width: 26, height: 26, borderRadius: 8, background: mm.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0, marginTop: 2 }}>{mm.icon}</div>
              )}
              <div style={{ maxWidth: "82%", background: msg.role === "user" ? `${mod.color}18` : "#1a1920", border: `1px solid ${msg.role === "user" ? `${mod.color}30` : "#2a2835"}`, borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px", padding: "12px 16px", fontSize: 13.5 }}>
                {msg.role === "assistant" ? (
                  <div>
                    <TypeWriter text={msg.text} onComplete={() => setExtras(p => ({ ...p, [msg.id]: true }))} />
                    {extras[msg.id] && msg.data?.phrases && (
                      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(125px,1fr))", gap: 8 }}>
                        {msg.data.phrases.map((p, j) => <PhraseCard key={j} phrase={p} color={mm.color} delay={j * 150} />)}
                      </div>
                    )}
                    {extras[msg.id] && msg.data?.stats && (
                      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                        {msg.data.stats.map((s, j) => <StatCard key={j} stat={s} color={mm.color} delay={j * 200} />)}
                      </div>
                    )}
                    {extras[msg.id] && msg.data?.actions && (
                      <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {msg.data.actions.map((a, j) => (
                          <button key={j} style={{ background: `${mm.color}20`, border: `1px solid ${mm.color}40`, borderRadius: 8, padding: "7px 14px", color: mm.color, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{a}</button>
                        ))}
                      </div>
                    )}
                    {extras[msg.id] && msg.data?.sources && (
                      <div style={{ marginTop: 12, padding: "6px 10px", background: "#131218", borderRadius: 8, fontSize: 10, color: "#888" }}>
                        <span style={{ fontWeight: 600 }}>Sources:</span> {msg.data.sources.join(" · ")}
                      </div>
                    )}
                  </div>
                ) : <span>{msg.text}</span>}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div style={{ display: "flex", gap: 10, animation: "fadeUp .3s ease" }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: mod.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>{mod.icon}</div>
            <div style={{ background: "#1a1920", border: "1px solid #2a2835", borderRadius: "14px 14px 14px 4px", padding: "12px 18px", display: "flex", alignItems: "center", gap: 4 }}>
              {[0, 1, 2].map(i => <span key={i} style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: mod.color, animation: `bounce 1.2s infinite`, animationDelay: `${i * .15}s` }} />)}
            </div>
          </div>
        )}
        <div ref={chatEnd} />
      </div>

      {/* Input */}
      <div style={{ padding: "10px 18px 14px", borderTop: "1px solid #2a2835", background: "#131218", flexShrink: 0 }}>
        {messages.length > 0 && (
          <div style={{ display: "flex", gap: 6, marginBottom: 8, overflowX: "auto" }}>
            {suggestions.filter(q => !usedQ.includes(q)).slice(0, 2).map((q, i) => (
              <button key={i} onClick={() => send(q)} style={{ background: "#131218", border: "1px solid #2a2835", borderRadius: 16, padding: "5px 13px", color: "#888", fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>{q}</button>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: 10 }}>
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
            placeholder={`Ask Chikasha AI about ${mod.subtitle.toLowerCase()}...`}
            style={{ flex: 1, background: "#1a1920", border: "1px solid #2a2835", borderRadius: 12, padding: "11px 16px", color: "#E8E4DD", fontSize: 14, outline: "none" }}
            onFocus={e => e.target.style.borderColor = mod.color} onBlur={e => e.target.style.borderColor = "#2a2835"}
          />
          <button onClick={() => send()} disabled={!inputVal.trim() || isTyping} style={{
            background: mod.gradient, border: "none", borderRadius: 12, width: 44, height: 44,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: inputVal.trim() && !isTyping ? "pointer" : "default",
            opacity: inputVal.trim() && !isTyping ? 1 : .35, fontSize: 18, color: "#fff", flexShrink: 0,
          }}>↑</button>
        </div>
        <div style={{ textAlign: "center", marginTop: 8, fontSize: 9, color: "#444", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Sovereign AI · Trace Fiber Network · Chickasaw Nation Infrastructure
        </div>
      </div>
    </div>
  );
            }
