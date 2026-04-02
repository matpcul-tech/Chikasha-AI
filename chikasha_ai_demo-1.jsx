import { useState, useEffect, useRef, useCallback } from "react";

const MODULES = {
  language: {
    name: "Chikashshanompa'",
    subtitle: "Language Preservation",
    icon: "𐒼",
    color: "#C45A3C",
    gradient: "linear-gradient(135deg, #C45A3C 0%, #8B2E1A 100%)",
  },
  health: {
    name: "Health Intelligence",
    subtitle: "Preventive Care",
    icon: "◈",
    color: "#2D7A6F",
    gradient: "linear-gradient(135deg, #2D7A6F 0%, #1A4A42 100%)",
  },
  citizen: {
    name: "Citizen Services",
    subtitle: "Navigation & Support",
    icon: "⬡",
    color: "#8B6914",
    gradient: "linear-gradient(135deg, #8B6914 0%, #5C4510 100%)",
  },
  cultural: {
    name: "Cultural Knowledge",
    subtitle: "History & Heritage",
    icon: "◆",
    color: "#6B4C8A",
    gradient: "linear-gradient(135deg, #6B4C8A 0%, #3E2D52 100%)",
  },
};

const DEMO_CONVERSATIONS = {
  language: [
    {
      prompts: [
        "How do I say 'Hello, how are you?' in Chickasaw?",
        "Teach me a greeting in Chikashshanompa'",
        "Translate 'good morning' to Chickasaw",
      ],
      response: {
        text: `**Chokma! (jók-mah)**\n\nThis is the Chickasaw word for "Hello" — and it carries more meaning than a simple greeting. It conveys well-being and goodwill.\n\nTo say **"Hello, how are you?"**:\n\n**Chokma, chinchokma?**\n*(jók-mah, chin-jók-mah)*\n\nLiteral meaning: "Good, are you good?"\n\nThe response would be:\n**Achokma, chinchokma?**\n*(ah-jók-mah, chin-jók-mah)*\n"I am good, are you good?"`,
        audio: true,
        phrases: [
          { chickasaw: "Chokma", english: "Hello / It is good", pronunciation: "jók-mah" },
          { chickasaw: "Chinchokma?", english: "How are you?", pronunciation: "chin-jók-mah" },
          { chickasaw: "Achokma", english: "I am good/well", pronunciation: "ah-jók-mah" },
          { chickasaw: "Yakoke", english: "Thank you", pronunciation: "yah-kó-ki" },
        ],
      },
    },
    {
      prompts: [
        "Tell me about the Chickasaw number system",
        "How do I count in Chickasaw?",
        "Numbers in Chikashshanompa'",
      ],
      response: {
        text: `**Chickasaw Numbers — Holhtina'**\n\nThe Chickasaw number system is base-ten. Here are the foundational numbers:\n\n**1** — Chaffa *(CHAHF-fah)*\n**2** — Toklo *(TOHK-loh)*\n**3** — Tochchí'na *(tohch-CHEE-nah)*\n**4** — Oshta' *(OHSH-tah)*\n**5** — Talhlhá'pi *(tahl-HLAH-pee)*\n\nThe numbers 6–9 build upon these roots. The word for ten is **Pokkó'li** *(pohk-KOH-lee)*.\n\nWould you like to practice counting with an interactive exercise?`,
        audio: true,
        phrases: [
          { chickasaw: "Chaffa", english: "One", pronunciation: "CHAHF-fah" },
          { chickasaw: "Toklo", english: "Two", pronunciation: "TOHK-loh" },
          { chickasaw: "Tochchí'na", english: "Three", pronunciation: "tohch-CHEE-nah" },
          { chickasaw: "Oshta'", english: "Four", pronunciation: "OHSH-tah" },
          { chickasaw: "Talhlhá'pi", english: "Five", pronunciation: "tahl-HLAH-pee" },
        ],
      },
    },
  ],
  health: [
    {
      prompts: [
        "What are my health screening recommendations?",
        "What preventive care should I get?",
        "Show my health dashboard",
      ],
      response: {
        text: `**Your Preventive Care Summary**\n\nBased on your age group and health profile, the CFM Health Intelligence module recommends the following screenings through the Chickasaw Nation Medical Center:\n\n**Priority — Schedule This Quarter:**\n• Annual comprehensive blood panel — Due: Overdue by 2 months\n• Blood pressure monitoring — Last: 128/82 — Borderline, recheck in 30 days\n\n**Upcoming — Next 6 Months:**\n• A1C / Diabetes screening — Scheduled: September 2025\n• Cardiovascular risk assessment\n\n**Annual — On Track:**\n• Vision screening — Completed March 2025\n• Dental exam — Scheduled July 2025\n\nAll records stored on Chickasaw Nation sovereign infrastructure via Trace Fiber. No data leaves Nation-controlled systems.`,
        dashboard: true,
      },
    },
    {
      prompts: [
        "Show diabetes prevention data for our community",
        "What are the diabetes statistics?",
        "Community health trends",
      ],
      response: {
        text: `**Community Health Intelligence — Diabetes Prevention**\n\nThe CFM tracks de-identified, aggregate health trends across consenting citizens to enable early intervention.\n\n**Key Findings (Simulated Pilot Data):**\n\n• Pre-diabetic identification rate increased 340% with AI-assisted screening vs. traditional methods\n• Average detection moved from 4.2 years after onset to 1.8 years before clinical symptoms\n• Cost per early intervention: $3,200/patient vs. $47,000/patient for late-stage management\n\nRecommendation: Expand pilot screening cohort from 500 to 2,000 citizens in Year 2. Projected cost avoidance: $8M–$20M annually.\n\nAll data governed by Chickasaw Nation tribal law. Zero data shared with federal databases without explicit Nation consent.`,
        stats: [
          { label: "Early Detection Rate", value: "340%", sub: "increase" },
          { label: "Avg. Early Warning", value: "1.8 yrs", sub: "before symptoms" },
          { label: "Cost Savings", value: "93%", sub: "per patient" },
        ],
      },
    },
  ],
  citizen: [
    {
      prompts: [
        "How do I apply for housing assistance?",
        "What benefits am I eligible for?",
        "Help with my benefits application",
      ],
      response: {
        text: `**Chickasaw Nation Housing Assistance**\n\nAs an enrolled Chickasaw citizen, you may be eligible for several housing programs. Here is what is available:\n\n**1. Home Loan Program**\nLow-interest loans for home purchase within the 13-county jurisdiction. Current rate: 3.25% fixed.\n\n**2. Down Payment Assistance**\nUp to $15,000 for first-time homebuyers. Income-qualified.\n\n**3. Home Repair & Rehabilitation**\nGrants up to $25,000 for necessary repairs to owner-occupied homes.\n\n**4. Rental Assistance**\nMonthly rental support for qualifying citizens.\n\nI can help you start a pre-qualification form right now, or connect you with a housing counselor at the Chickasaw Nation Division of Housing. Your nearest office is in Ada, OK.`,
        actions: ["Start Pre-Qualification", "Find Nearest Office", "Download Application"],
      },
    },
    {
      prompts: [
        "Help me find education programs",
        "Chickasaw education assistance",
        "Scholarship information",
      ],
      response: {
        text: `**Chickasaw Nation Education Programs**\n\nThe Nation offers comprehensive education support at every stage of life:\n\n**K-12 Support**\n• School supply assistance\n• Tutoring programs\n• STEM enrichment camps\n\n**Higher Education**\n• Chickasaw Nation Education Foundation scholarships — up to $8,000/year\n• Graduate and professional school funding\n• GED completion assistance\n\n**Career Development**\n• Workforce training programs\n• Vocational certifications\n• Professional development grants\n\nBased on your profile, you may qualify for 3 active scholarship programs. Want me to check eligibility?`,
        actions: ["Check Scholarship Eligibility", "View All Programs", "Talk to Advisor"],
      },
    },
  ],
  cultural: [
    {
      prompts: [
        "Tell me about the Chickasaw removal story",
        "What happened during the Trail of Tears?",
        "Chickasaw Nation history",
      ],
      response: {
        text: `**The Chickasaw Removal — A Story of Resilience**\n\nThe Chickasaw people's forced removal from their homeland in present-day Mississippi, Alabama, and Tennessee began in the 1830s following the Treaty of Pontotoc Creek (1832) and the Treaty of Doaksville (1837).\n\n**What Makes the Chickasaw Story Unique:**\n\nUnlike other removed tribes, the Chickasaw Nation negotiated the sale of their homeland — refusing to simply surrender it. They received $3 million for their lands, and used those funds to purchase territory from the Choctaw Nation in Indian Territory.\n\n**The Chickasaw people were never conquered. They were displaced by policy, but they negotiated from strength even in removal.**\n\nThe journey itself was devastating — hundreds died from disease, exposure, and deprivation. But the Nation rebuilt, establishing a constitutional government, schools, and a thriving economy in Indian Territory.\n\nToday, the Chickasaw Nation is one of the most economically powerful tribal nations in America — with over 80,000 citizens and enterprises spanning gaming, manufacturing, banking, and technology.\n\n**Unconquered. Unconquerable.**`,
        sources: ["Chickasaw Nation Archives", "Chickasaw.tv", "Dept. of History & Culture"],
      },
    },
    {
      prompts: [
        "Who are the traditional Chickasaw clans?",
        "Tell me about Chickasaw clan system",
        "Chickasaw social structure",
      ],
      response: {
        text: `**Iksa — The Chickasaw Clan System**\n\nThe Chickasaw people organized their society through a matrilineal clan system called **Iksa**. Clan membership passed through the mother's line — your clan was your mother's clan.\n\n**The Two Moieties:**\nChickasaw clans were divided into two primary divisions:\n\n**Imosaktca'** (the elder division)\n**Intcukwalipa** (the younger division)\n\nWithin these divisions, individual clans included names like:\n• Minko' Iksa — Chief clan\n• Panther\n• Bird\n• Fish\n• Deer\n• Raccoon\n\n**Why It Matters Today:**\nClan identity shaped governance, marriage rules, and social obligations. Understanding Iksa helps citizens connect with the deep social fabric that sustained Chickasaw society for centuries.\n\nThe CFM sources this from the Chickasaw Nation Department of History & Culture and validated oral histories.`,
        sources: ["Chickasaw Nation Dept. of History & Culture", "Chickasaw Press Publications"],
      },
    },
  ],
};

function formatMarkdown(text) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match;
    const segments = [];

    while ((match = boldRegex.exec(line)) !== null) {
      if (match.index > lastIndex) segments.push({ type: "text", content: line.slice(lastIndex, match.index) });
      segments.push({ type: "bold", content: match[1] });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < line.length) segments.push({ type: "text", content: line.slice(lastIndex) });
    if (segments.length === 0) segments.push({ type: "text", content: line });

    const isBullet = line.trim().startsWith("•");
    const rendered = segments.map((seg, j) =>
      seg.type === "bold"
        ? <strong key={j} style={{ color: "var(--accent)" }}>{seg.content}</strong>
        : <span key={j}>{seg.content}</span>
    );

    if (isBullet) return <div key={i} style={{ paddingLeft: 16, marginBottom: 2, lineHeight: 1.7 }}>{rendered}</div>;
    return <div key={i} style={{ marginBottom: line === "" ? 8 : 2, lineHeight: 1.7 }}>{rendered}</div>;
  });
}

function TypeWriter({ text, speed = 10, onComplete }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  const completeCalled = useRef(false);

  useEffect(() => {
    setDisplayed("");
    idx.current = 0;
    setDone(false);
    completeCalled.current = false;
  }, [text]);

  useEffect(() => {
    if (idx.current < text.length) {
      const timer = setTimeout(() => {
        const next = Math.min(idx.current + 4, text.length);
        idx.current = next;
        setDisplayed(text.slice(0, next));
        if (next >= text.length && !completeCalled.current) {
          completeCalled.current = true;
          setDone(true);
          onComplete?.();
        }
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, speed, onComplete]);

  return <span>{formatMarkdown(displayed)}{!done && <span style={{ animation: "blink 0.8s infinite", color: "var(--accent)", fontWeight: 300 }}>▌</span>}</span>;
}

function PhraseCard({ phrase, color, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t); }, [delay]);

  return (
    <div style={{
      background: `${color}12`, border: `1px solid ${color}30`, borderRadius: 10, padding: "12px 16px",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)", transition: "all 0.4s ease",
    }}>
      <div style={{ fontSize: 18, fontWeight: 700, color, fontFamily: "'Playfair Display', serif" }}>{phrase.chickasaw}</div>
      <div style={{ fontSize: 12, color: "#8A8696", fontStyle: "italic", marginTop: 2 }}>/{phrase.pronunciation}/</div>
      <div style={{ fontSize: 13, color: "#E8E4DD", marginTop: 4 }}>{phrase.english}</div>
      <button style={{
        marginTop: 8, background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 6,
        padding: "4px 10px", fontSize: 11, color, cursor: "pointer", fontWeight: 600, fontFamily: "'Source Sans 3', sans-serif",
      }}>🔊 Listen</button>
    </div>
  );
}

function StatCard({ stat, color, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t); }, [delay]);

  return (
    <div style={{
      background: "#1A1920", border: "1px solid #2A2835", borderRadius: 12, padding: "16px 12px", textAlign: "center",
      opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.9)", transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: color || "#2D7A6F", fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#E8E4DD", marginTop: 4 }}>{stat.label}</div>
      <div style={{ fontSize: 11, color: "#8A8696" }}>{stat.sub}</div>
    </div>
  );
}

export default function ChikashaAiDemo() {
  const [activeModule, setActiveModule] = useState("language");
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [extrasVisible, setExtrasVisible] = useState({});
  const chatEndRef = useRef(null);
  const mod = MODULES[activeModule];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, extrasVisible]);

  const handleSend = useCallback((text) => {
    const query = text || inputVal;
    if (!query.trim() || isTyping) return;
    setInputVal("");

    const userMsg = { id: Date.now(), role: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const convos = DEMO_CONVERSATIONS[activeModule];
      const usedCount = messages.filter((m) => m.role === "assistant").length;
      const selected = convos[usedCount % convos.length];

      const assistantId = Date.now() + 1;
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", text: selected.response.text, data: selected.response, module: activeModule },
      ]);
      setIsTyping(false);
    }, 1200);
  }, [inputVal, isTyping, activeModule, messages]);

  const handleModuleSwitch = (key) => {
    setActiveModule(key);
    setMessages([]);
    setExtrasVisible({});
  };

  const suggestedQueries = DEMO_CONVERSATIONS[activeModule]?.map((c) => c.prompts[0]) || [];
  const usedQueries = messages.filter((m) => m.role === "user").map((m) => m.text);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes typingBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-6px); opacity: 1; } }
        @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); } 70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); } 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); } }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2A2835; border-radius: 10px; }
        input::placeholder { color: #8A8696; }
      `}</style>

      <div style={{
        fontFamily: "'Source Sans 3', sans-serif", background: "#0C0B0F", color: "#E8E4DD",
        height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden",
        "--accent": mod.color,
      }}>
        {/* Header */}
        <div style={{ padding: "14px 20px", borderBottom: "1px solid #2A2835", background: "#151419", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, background: mod.gradient,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
              boxShadow: `0 4px 20px ${mod.color}30`, transition: "all 0.4s ease",
            }}>{mod.icon}</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, letterSpacing: 0.5 }}>
                CHIKASHA <span style={{ color: mod.color, transition: "color 0.3s" }}>AI</span>
              </div>
              <div style={{ fontSize: 10, color: "#8A8696", letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
                Chikasha Foundational Model — Interactive Demo
              </div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", animation: "pulseRing 2s infinite" }} />
              <span style={{ fontSize: 10, color: "#4ADE80", fontWeight: 600, letterSpacing: 1 }}>SOVEREIGN</span>
            </div>
          </div>

          {/* Module Tabs */}
          <div style={{ display: "flex", gap: 6, overflow: "auto" }}>
            {Object.entries(MODULES).map(([key, m]) => {
              const active = activeModule === key;
              return (
                <button key={key} onClick={() => handleModuleSwitch(key)} style={{
                  border: `1px solid ${active ? m.color : "#2A2835"}`,
                  background: active ? `${m.color}15` : "#151419",
                  borderRadius: 10, padding: "8px 12px", cursor: "pointer", textAlign: "left",
                  flex: 1, minWidth: 0, transition: "all 0.3s ease",
                  boxShadow: active ? `0 0 16px ${m.color}15` : "none",
                }}>
                  <div style={{ fontSize: 14, marginBottom: 1 }}>{m.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: active ? m.color : "#E8E4DD", whiteSpace: "nowrap" }}>{m.name}</div>
                  <div style={{ fontSize: 9, color: "#8A8696", whiteSpace: "nowrap" }}>{m.subtitle}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
          {messages.length === 0 && (
            <div style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              textAlign: "center", gap: 18, animation: "fadeUp 0.6s ease",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: 16, background: mod.gradient,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32,
                boxShadow: `0 8px 40px ${mod.color}25`, transition: "all 0.4s ease",
              }}>{mod.icon}</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{mod.name}</div>
                <div style={{ fontSize: 13, color: "#8A8696", maxWidth: 360, lineHeight: 1.5 }}>
                  {activeModule === "language" && "Ask me anything about Chikashshanompa'. I can translate, teach pronunciation, and help you learn the language of our ancestors."}
                  {activeModule === "health" && "Your sovereign health intelligence system. View preventive care recommendations, community health trends, and screenings — all on Nation infrastructure."}
                  {activeModule === "citizen" && "Navigate Chickasaw Nation programs and services. I help with applications, eligibility, and connecting you to the right resources."}
                  {activeModule === "cultural" && "Explore the rich history, traditions, and heritage of the Chickasaw people. Sourced from Nation archives and cultural departments."}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 480 }}>
                {suggestedQueries.map((q, i) => (
                  <button key={i} onClick={() => handleSend(q)} style={{
                    background: "#151419", border: "1px solid #2A2835", borderRadius: 20,
                    padding: "8px 16px", color: "#8A8696", fontSize: 13, cursor: "pointer",
                    fontFamily: "'Source Sans 3', sans-serif", whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.target.style.borderColor = mod.color; e.target.style.color = "#E8E4DD"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "#2A2835"; e.target.style.color = "#8A8696"; }}
                  >{q}</button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => {
            const msgMod = MODULES[msg.module || activeModule] || mod;
            return (
              <div key={msg.id} style={{
                display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                gap: 10, animation: "fadeUp 0.4s ease",
              }}>
                {msg.role === "assistant" && (
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, background: msgMod.gradient,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, flexShrink: 0, marginTop: 2,
                  }}>{msgMod.icon}</div>
                )}
                <div style={{
                  maxWidth: "82%",
                  background: msg.role === "user" ? `${mod.color}18` : "#1A1920",
                  border: `1px solid ${msg.role === "user" ? `${mod.color}30` : "#2A2835"}`,
                  borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  padding: "12px 16px", fontSize: 13.5,
                }}>
                  {msg.role === "assistant" ? (
                    <div>
                      <TypeWriter text={msg.text} onComplete={() => setExtrasVisible((p) => ({ ...p, [msg.id]: true }))} />
                      {extrasVisible[msg.id] && msg.data?.phrases && (
                        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 8 }}>
                          {msg.data.phrases.map((p, j) => <PhraseCard key={j} phrase={p} color={msgMod.color} delay={j * 150} />)}
                        </div>
                      )}
                      {extrasVisible[msg.id] && msg.data?.stats && (
                        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                          {msg.data.stats.map((s, j) => <StatCard key={j} stat={s} color={msgMod.color} delay={j * 200} />)}
                        </div>
                      )}
                      {extrasVisible[msg.id] && msg.data?.actions && (
                        <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {msg.data.actions.map((a, j) => (
                            <button key={j} style={{
                              background: `${msgMod.color}20`, border: `1px solid ${msgMod.color}40`, borderRadius: 8,
                              padding: "7px 14px", color: msgMod.color, fontSize: 12, fontWeight: 600, cursor: "pointer",
                              fontFamily: "'Source Sans 3', sans-serif",
                            }}>{a}</button>
                          ))}
                        </div>
                      )}
                      {extrasVisible[msg.id] && msg.data?.sources && (
                        <div style={{ marginTop: 12, padding: "7px 10px", background: "#151419", borderRadius: 8, fontSize: 10, color: "#8A8696" }}>
                          <span style={{ fontWeight: 600 }}>Sources:</span> {msg.data.sources.join(" · ")}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span>{msg.text}</span>
                  )}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div style={{ display: "flex", gap: 10, animation: "fadeUp 0.3s ease" }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, background: mod.gradient,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0,
              }}>{mod.icon}</div>
              <div style={{
                background: "#1A1920", border: "1px solid #2A2835", borderRadius: "14px 14px 14px 4px",
                padding: "12px 18px", display: "flex", alignItems: "center", gap: 3,
              }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{
                    display: "inline-block", width: 7, height: 7, borderRadius: "50%",
                    background: mod.color, animation: `typingBounce 1.2s infinite`, animationDelay: `${i * 0.15}s`,
                  }} />
                ))}
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: "12px 20px 16px", borderTop: "1px solid #2A2835", background: "#151419", flexShrink: 0 }}>
          {messages.length > 0 && (
            <div style={{ display: "flex", gap: 6, marginBottom: 8, overflowX: "auto" }}>
              {suggestedQueries.filter((q) => !usedQueries.includes(q)).slice(0, 2).map((q, i) => (
                <button key={i} onClick={() => handleSend(q)} style={{
                  background: "#151419", border: "1px solid #2A2835", borderRadius: 16,
                  padding: "6px 14px", color: "#8A8696", fontSize: 12, cursor: "pointer",
                  fontFamily: "'Source Sans 3', sans-serif", whiteSpace: "nowrap",
                }}>{q}</button>
              ))}
            </div>
          )}
          <div style={{ display: "flex", gap: 10 }}>
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={`Ask Chikasha AI about ${mod.subtitle.toLowerCase()}...`}
              style={{
                flex: 1, background: "#1A1920", border: "1px solid #2A2835", borderRadius: 12,
                padding: "11px 16px", color: "#E8E4DD", fontSize: 14, fontFamily: "'Source Sans 3', sans-serif", outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = mod.color}
              onBlur={(e) => e.target.style.borderColor = "#2A2835"}
            />
            <button onClick={() => handleSend()} disabled={!inputVal.trim() || isTyping} style={{
              background: mod.gradient, border: "none", borderRadius: 12, width: 46, height: 46,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: inputVal.trim() && !isTyping ? "pointer" : "default",
              opacity: inputVal.trim() && !isTyping ? 1 : 0.35, fontSize: 18, color: "#fff", flexShrink: 0,
            }}>↑</button>
          </div>
          <div style={{ textAlign: "center", marginTop: 8, fontSize: 9, color: "#5A5768", letterSpacing: 1.5, textTransform: "uppercase" }}>
            Sovereign AI · Trace Fiber Network · Chickasaw Nation Infrastructure
          </div>
        </div>
      </div>
    </>
  );
}
