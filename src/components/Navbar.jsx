import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/rules", label: "Rules" },
    { to: "/design", label: "Game Design" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  return (
    <div style={{background:"#00ffd5", borderBottom:"1px solid beige"}}>
      <nav className="px-8 py-4 bg-slate-900 shadow-lg"
      style={{
            display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      margin: '0px 20px'
      }}>
        <h1 className="text-2xl font-bold text-emerald-400" style={{color:"#0e1f30"}}>Corporate Maze</h1>
        <div className="space-x-6" style={{display:"flex", gap:"15px"}}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-emerald-400 ${
                location.pathname === l.to ? "text-emerald-400" : ""
              }`}
              style={{color:"#0e1f30", fontWeight:"600"}}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;