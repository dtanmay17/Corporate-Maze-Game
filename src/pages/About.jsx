import React from "react";
function About() {
  return (
    <div className="max-w-2xl mx-auto text-center" style={{margin:"50px", lineHeight:"2"}}>
      <h2 className="text-3xl font-bold mb-4" style={{color:"white"}}>About the Game</h2>
      <p style={{color:"white"}}>
        <b>Corporate Maze</b> is an action-oriented, educational board game that simulates a corporate career journey, complete with opportunities, trade-offs, and well-being checkpoints. 
        Players progress through a <b>41-space, snake-like board</b>, symbolizing a professional path from career start to success. The game's philosophy is simple yet powerful:<br /><br />
        <i>True career success lies not in finishing first, but in finishing balanced.</i><br /><br />
        It combines <b>performance management, growth and learning, and well-being awareness</b> - the three key dimensions of holistic success. 
      </p>
      <hr style={{backgroundColor:"#00ffd5", height:"1px", border:"none"}}/>

      <h2 className="text-3xl font-bold mb-4" style={{color:"white"}}>Motivation</h2>
      <p style={{color:"white"}}>
        <b>The Complexity of Modern Corporate Life</b><br /> 
        Organizations today operate in fast-changing, competitive environments that demand continuous adaptation, emotional resilience, and balanced performance. Employees are expected not only to deliver results but to sustain well-being and personal growth simultaneously. However, modern workplaces often push individuals toward unidimensional success, productivity without sustainability, ambition without reflection, and performance without wellness. 

      </p>

    </div>
  );
}

export default About;