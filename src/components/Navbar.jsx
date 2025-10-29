import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/rules", label: "Rules" },
    { to: "/design", label: "Design" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav
      style={{
        background: "radial-gradient(circle at center, #020617 0%, #0f172a 100%)",
        borderBottom: "1px solid rgba(0, 255, 213, 0.3)",
        boxShadow: "0 0 15px rgba(0, 255, 213, 0.2)",
        padding: "1.2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Logo / Title */}
      <div
        className="nav-logo"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "1.8rem",
          fontWeight: "700",
          color: "#00ffd5",
          textShadow: "0 0 15px #00ffd5",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
      >
        Corporate Maze
      </div>

      {/* Links */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {links.map((l) => {
          const isActive = location.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              style={{
                position: "relative",
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "1rem",
                color: isActive ? "#00ffd5" : "#c9fff5",
                textDecoration: "none",
                fontWeight: isActive ? "700" : "500",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                textShadow: isActive ? "0 0 10px #00ffd5" : "none",
              }}
              className="nav-link"
            >
              {l.label}
              <span
                style={{
                  content: "",
                  position: "absolute",
                  left: 0,
                  bottom: "-6px",
                  height: "2px",
                  width: isActive ? "100%" : "0%",
                  background: "#00ffd5",
                  boxShadow: "0 0 10px #00ffd5",
                  borderRadius: "4px",
                  transition: "width 0.3s ease",
                }}
                className="nav-underline"
              ></span>
            </Link>
          );
        })}
      </div>

      {/* Hover Effect Styling */}
      <style>
        {`
          .nav-link:hover {
            color: #00ffd5 !important;
            text-shadow: 0 0 12px #00ffd5;
          }

          .nav-link:hover .nav-underline {
            width: 100% !important;
          }

          @media (max-width: 768px) {
            nav {
              flex-direction: column;
              padding: 1rem 1.5rem;
            }
            .nav-links {
              flex-wrap: wrap;
              justify-content: center;
              gap: 1rem;
              margin-top: 0.5rem;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
