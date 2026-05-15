import React from 'react';

// --- Professional Light Theme Constants ---
const COLORS = {
  bg: "#ffffff",         // Pure White Background
  section: "#f8fafc",    // Very Light Grey for contrast
  accent: "#10b981",     // Emerald Green (Professional Green)
  textMain: "#0f172a",   // Near Black for readability
  textMuted: "#64748b",  // Soft Slate for descriptions
  border: "#e2e8f0"      // Light Border
};

function App() {
  return (
    <div style={{
      backgroundColor: COLORS.bg,
      minHeight: "100vh",
      color: COLORS.textMain,
      fontFamily: "'Inter', system-ui, sans-serif",
      lineHeight: "1.6",
      scrollBehavior: "smooth"
    }}>
      
      {/* 1. NAVBAR - Updated to Pranay.dev */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 8%",
        position: "sticky",
        top: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${COLORS.border}`,
        zIndex: 1000
      }}>
        <h2 style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-1px" }}>
          PRANAY<span style={{ color: COLORS.accent }}>.DEV</span>
        </h2>
        <div style={{ display: "flex", gap: "30px", fontWeight: "600", fontSize: "14px" }}>
          <a href="#home" style={{ color: COLORS.textMuted, textDecoration: "none" }}>Home</a>
          <a href="#projects" style={{ color: COLORS.textMuted, textDecoration: "none" }}>Projects</a>
          <a href="#skills" style={{ color: COLORS.textMuted, textDecoration: "none" }}>Skills</a>
          <a href="#contact" style={{ color: COLORS.textMuted, textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      <main>
        {/* 2. HERO SECTION */}
        <section id="home" style={{ padding: "120px 8% 80px", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(45px, 8vw, 75px)", fontWeight: "900", marginBottom: "20px", color: COLORS.textMain }}>
            Modern AI <span style={{ color: COLORS.accent }}>Developer.</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 40px", color: COLORS.textMuted, fontSize: "18px" }}>
            I specialize in building intelligent web applications using React and Node.js.
          </p>
          <a href="#projects" style={{
            padding: "15px 35px",
            backgroundColor: COLORS.textMain,
            color: "#fff",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>View My Work</a>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" style={{ padding: "80px 8%", backgroundColor: COLORS.section }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px" }}>Selected Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            <div style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "24px",
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
            }}>
              <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "15px" }}>Expense Tracker</h3>
              <p style={{ color: COLORS.textMuted, marginBottom: "25px" }}>
                A sophisticated financial dashboard built with React and Chart.js for real-time analytics.
              </p>
              <a href="https://expense-tracker-jade-ten-20.vercel.app" target="_blank" rel="noreferrer" style={{
                color: COLORS.accent,
                textDecoration: "none",
                fontWeight: "bold",
                borderBottom: `2px solid ${COLORS.accent}`
              }}>LIVE DEMO →</a>
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section id="skills" style={{ padding: "100px 8%", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "40px" }}>Tech Stack</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            {["React", "Node.js", "Python", "Html", "CSS", "JavaScript", ].map(skill => (
              <span key={skill} style={{
                padding: "12px 24px",
                backgroundColor: COLORS.bg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: "600",
                color: COLORS.textMuted
              }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 4. CONTACT SECTION - Full Light Mode */}
        <section id="contact" style={{ padding: "120px 8%", textAlign: "center", backgroundColor: "#ffffff" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "20px" }}>
            Let's build <span style={{ color: COLORS.accent }}>together.</span>
          </h2>
          <p style={{ color: COLORS.textMuted, marginBottom: "40px", fontSize: "18px" }}>
            Currently open for new projects and collaborations.
          </p>
          
          <div style={{
            display: "inline-block",
            padding: "25px 45px",
            borderRadius: "100px",
            backgroundColor: COLORS.section,
            border: `1px solid ${COLORS.border}`
          }}>
            <a href="mailto:pranaytembhurkar007@email.com" style={{
              fontSize: "20px",
              color: COLORS.textMain,
              textDecoration: "none",
              fontWeight: "700"
            }}>
              pranaytembhurkar007@email.com
            </a>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer style={{ textAlign: "center", padding: "50px", borderTop: `1px solid ${COLORS.border}`, color: COLORS.textMuted }}>
        © PRANAY.DEV | BUILT WITH PASSION
      </footer>
    </div>
  );
}

export default App;