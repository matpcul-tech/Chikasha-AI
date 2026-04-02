function LandingPage({ onEnter, onSelectModule }) {
  const [visible, setVisible] = useState(false);
  const [hoveredModule, setHoveredModule] = useState(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = (moduleKey) => {
    setEntered(true);
    setTimeout(() => {
      if (moduleKey) {
        onSelectModule(moduleKey);
      }
      onEnter();
    }, 600);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0A0A0B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        opacity: entered ? 0 : 1,
        transition: "opacity 0.6s ease",
        overflow: "auto",
        padding: "40px 20px",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(196, 90, 60, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(45, 122, 111, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 0%, rgba(139, 105, 20, 0.04) 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Sovereignty seal / icon */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 24px",
            borderRadius: "50%",
            border: "2px solid rgba(196, 90, 60, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle, rgba(196, 90, 60, 0.1) 0%, transparent 70%)",
          }}
        >
          <span style={{ fontSize: "36px", color: "#C45A3C" }}>𐒼</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 300,
            color: "#FAFAFA",
            margin: "0 0 8px 0",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          CHIKASHA AI
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(250, 250, 250, 0.4)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            margin: "0 0 8px 0",
          }}
        >
          Chikasha Foundational Model
        </p>

        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(196, 90, 60, 0.4)",
            margin: "16px auto",
          }}
        />

        <p
          style={{
            fontSize: "15px",
            color: "rgba(250, 250, 250, 0.6)",
            maxWidth: "500px",
            margin: "0 auto 12px",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Built by the Nation. For the Nation.
        </p>

        <p
          style={{
            fontSize: "13px",
            color: "rgba(250, 250, 250, 0.35)",
            maxWidth: "460px",
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Sovereign AI running on Chickasaw Nation infrastructure.
          <br />
          No data leaves Nation-controlled systems. Unconquered. Unconquerable.
        </p>
      </div>

      {/* Module selection cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
          maxWidth: "860px",
          width: "100%",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease 0.3s",
          position: "relative",
          zIndex: 1,
        }}
      >
        {Object.entries(MODULES).map(([key, mod]) => (
          <button
            key={key}
            onClick={() => handleEnter(key)}
            onMouseEnter={() => setHoveredModule(key)}
            onMouseLeave={() => setHoveredModule(null)}
            style={{
              background:
                hoveredModule === key
                  ? `linear-gradient(135deg, ${mod.color}22 0%, ${mod.color}11 100%)`
                  : "rgba(255,255,255,0.02)",
              border: `1px solid ${
                hoveredModule === key ? mod.color + "66" : "rgba(255,255,255,0.06)"
              }`,
              borderRadius: "12px",
              padding: "24px 20px",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.3s ease",
              transform: hoveredModule === key ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                opacity: hoveredModule === key ? 1 : 0.6,
                transition: "opacity 0.3s ease",
              }}
            >
              {mod.icon}
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: hoveredModule === key ? mod.color : "#FAFAFA",
                marginBottom: "4px",
                transition: "color 0.3s ease",
              }}
            >
              {mod.name}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(250,250,250,0.4)",
                letterSpacing: "0.5px",
              }}
            >
              {mod.subtitle}
            </div>
          </button>
        ))}
      </div>

      {/* Enter without selecting a module */}
      <button
        onClick={() => handleEnter(null)}
        style={{
          marginTop: "32px",
          background: "none",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(250,250,250,0.5)",
          padding: "10px 32px",
          borderRadius: "8px",
          fontSize: "13px",
          cursor: "pointer",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "0.5s",
          position: "relative",
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = "rgba(196, 90, 60, 0.4)";
          e.target.style.color = "rgba(250,250,250,0.8)";
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = "rgba(255,255,255,0.1)";
          e.target.style.color = "rgba(250,250,250,0.5)";
        }}
      >
        Explore All Modules
      </button>

      {/* Sovereign data footer */}
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 0.7s",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#2D7A6F",
            boxShadow: "0 0 8px rgba(45, 122, 111, 0.5)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: "11px",
            color: "rgba(250,250,250,0.3)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Sovereign Infrastructure · Trace Fiber Networks · Encrypted
        </span>
      </div>

      {/* Disclaimer */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "10px",
          color: "rgba(250,250,250,0.15)",
          maxWidth: "500px",
          textAlign: "center",
          lineHeight: 1.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        This prototype demonstrates the user experience of the Chikasha Foundational Model.
        Language content is sourced from publicly available materials and requires validation by
        the Department of Language before deployment.
      </p>

      {/* Pulse animation keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
