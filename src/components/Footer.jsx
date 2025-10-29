import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "radial-gradient(circle at top, #020617 0%, #0f172a 100%)",
        borderTop: "1px solid rgba(0, 255, 213, 0.3)",
        boxShadow: "0 -5px 20px rgba(0, 255, 213, 0.15)",
        padding: "2rem 1rem",
        color: "#c9fff5",
        textAlign: "center",
        fontFamily: "'Exo 2', sans-serif",
        position: "relative",
        marginTop: "60px",
        overflow: "hidden",
      }}
      className="footer"
    >
      {/* Animated Glow Line */}
      <div
        className="footer-glow"
        style={{
          position: "absolute",
          top: 0,
          left: "-50%",
          width: "200%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #00ffd5, transparent)",
          animation: "move-glow 4s linear infinite",
          opacity: 0.7,
        }}
      ></div>

      {/* Footer Content */}
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h3
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "1.4rem",
            color: "#00ffd5",
            marginBottom: "0.5rem",
            textShadow: "0 0 12px #00ffd5",
          }}
        >
          Corporate Maze
        </h3>

        <p
          style={{
            fontSize: "0.95rem",
            color: "#b8fff0",
            marginBottom: "1rem",
            lineHeight: 1.6,
          }}
        >
          A journey through performance, growth, and well-being — where balance
          defines true success.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <a
            href="#"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.textShadow = "0 0 10px #00ffd5")}
            onMouseLeave={(e) => (e.target.style.textShadow = "none")}
          >
            LinkedIn
          </a>
          <a
            href="#"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.textShadow = "0 0 10px #00ffd5")}
            onMouseLeave={(e) => (e.target.style.textShadow = "none")}
          >
            Instagram
          </a>
          <a
            href="#"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.textShadow = "0 0 10px #00ffd5")}
            onMouseLeave={(e) => (e.target.style.textShadow = "none")}
          >
            Contact
          </a>
        </div>

        <p
          style={{
            fontSize: "0.8rem",
            opacity: 0.8,
            color: "#aaffee",
            letterSpacing: "0.5px",
          }}
        >
          © {new Date().getFullYear()} Corporate Maze. All rights reserved.
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes move-glow {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(50%); }
          }

          @media (max-width: 600px) {
            .footer h3 {
              font-size: 1.2rem;
            }
            .footer p {
              font-size: 0.85rem;
            }
          }
        `}
      </style>
    </footer>
  );
}

// 🔹 Shared link style for glow hover
const linkStyle = {
  color: "#00ffd5",
  fontWeight: "600",
  textDecoration: "none",
  transition: "all 0.3s ease",
  letterSpacing: "0.6px",
};

export default Footer;
