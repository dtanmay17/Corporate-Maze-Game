import React from "react";

function About() {
  return (
    <div
      className="about-section text-center"
      style={{
        padding: "4rem 2rem",
        color: "#d9fff9",
        fontFamily: "'Exo 2', sans-serif",
        background: "radial-gradient(circle at center, #0f172a 0%, #020617 100%)",
      }}
    >
      <h2
        className="about-title"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.5rem",
          color: "#00ffd5",
          textShadow: "0 0 25px #00ffd5",
          marginBottom: "1.5rem",
        }}
      >
        About the Game
      </h2>

      <p
        className="about-text max-w-3xl mx-auto"
        style={{
          maxWidth: "800px",
          margin: "0 auto 3rem",
          lineHeight: "1.9",
          fontSize: "1.05rem",
          opacity: 0.95,
        }}
      >
        <b>Corporate Maze</b> is an immersive, thought-provoking board game that mirrors the
        journey of professional life — filled with opportunities, trade-offs, and moments
        of reflection. Set on a <b>41-space, career-inspired board</b>, it invites players
        to balance ambition, performance, and well-being in a dynamic, evolving workplace.
        <br />
        <br />
        <i>Winning here isn’t about reaching the end first — it’s about reaching with balance.</i>
      </p>

      <hr
        style={{
          background: "linear-gradient(90deg, transparent, #00ffd5, transparent)",
          height: "2px",
          border: "none",
          width: "60%",
          margin: "2rem auto",
        }}
      />

      <h2
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.2rem",
          color: "#00ffd5",
          textShadow: "0 0 20px #00ffd5",
          marginBottom: "1.5rem",
        }}
      >
        Our Philosophy
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 3rem",
          lineHeight: "1.9",
          fontSize: "1.05rem",
          opacity: 0.9,
        }}
      >
        <b>Corporate Maze</b> is built on a simple yet powerful truth: success is
        multi-dimensional. True growth isn’t just about titles or targets — it’s about
        emotional balance, self-awareness, and sustainable ambition. Every move, every
        decision in the game nudges players to pause and think: <i>“Am I chasing growth or losing balance?”</i>
      </p>

      <h2
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.2rem",
          color: "#00ffd5",
          textShadow: "0 0 20px #00ffd5",
          marginBottom: "1.5rem",
        }}
      >
        Our Story
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 3rem",
          lineHeight: "1.9",
          fontSize: "1.05rem",
          opacity: 0.9,
        }}
      >
        Born from late-night brainstorming sessions and corporate reality checks,
        <b> Corporate Maze</b> was designed by a team of designers, HR professionals,
        and storytellers who wanted to turn workplace lessons into something playable,
        shareable, and deeply human. We wanted to create a game that makes people
        reflect, laugh, and maybe — rethink their definition of success.
      </p>

      <h2
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.2rem",
          color: "#00ffd5",
          textShadow: "0 0 20px #00ffd5",
          marginBottom: "1.5rem",
        }}
      >
        Join the Journey
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.9",
          fontSize: "1.05rem",
          opacity: 0.9,
        }}
      >
        Whether you're a player, a leader, or just curious about the psychology of
        workplaces — <b>Corporate Maze</b> welcomes you. Step in, take a turn, and discover
        that every career — much like every game — is meant to be played with purpose,
        reflection, and a bit of fun.
      </p>
    </div>
  );
}

export default About;
