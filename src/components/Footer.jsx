import React from "react";
function Footer() {
  return (
    <footer className="text-center py-4 bg-slate-900 border-t border-slate-800" style={{position:"relative", bottom:"0",display:"flex", justifyContent:"center",borderTop:"1px solid white", marginTop:"40px"}}>
      <p className="text-sm" style={{color:"white"}}>
        © {new Date().getFullYear()} Corporate Maze. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;