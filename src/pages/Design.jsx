import React from 'react'
import './css/design.css'

const Design = () => {
  return (
    <div className="game-page">
      <h1 className="game-title">Game Design</h1>
      <p className="game-subtitle">The strategy, structure, and soul of <strong>Corporate Maze</strong>.</p>

      {/* Section 1 – Board Design */}
      <section className="game-section">
        <h2 className="section-title">Board Design & Layout</h2>
        <p className="section-desc">
          The board features <strong>41 interconnected spaces</strong> arranged in a winding, maze-like structure.
          Each turn represents a career milestone — completing projects, facing setbacks, earning recognition, or taking a break.
        </p>

        <div className="color-legend">
          <div className="legend-item perf">P — Performance</div>
          <div className="legend-item grow">G — Growth</div>
          <div className="legend-item well">W — Well-being</div>
          <div className="legend-item chal">C — Challenge</div>
          <div className="legend-item blank">Career Break</div>
        </div>

        <p className="section-desc">
          The winding path captures the rhythm of corporate progression — early enthusiasm, mid-career complexity,
          and reflective maturity toward the end.
        </p>
      </section>

      {/* Section 2 – Components */}
        <section className="game-section">
  <h2 className="section-title">Components Overview</h2>
  <p className="section-desc">
    Every element of <strong>Corporate Maze</strong> is part of a connected ecosystem — strategy, randomness, reflection, and learning.
  </p>

  <div className="components-diagram">
    <div className="component-center">
      🎯
      <p>Main Board</p>
    </div>

    <div className="component-node" style={{ "--angle": "0deg" }}>
      <h3>Custom Dice</h3>
      <p>Controls pacing with 1–3 rolls for balanced strategy.</p>
    </div>

    <div className="component-node" style={{ "--angle": "60deg" }}>
      <h3>Player Tokens</h3>
      <p>Each player’s journey through the maze.</p>
    </div>

    <div className="component-node" style={{ "--angle": "120deg" }}>
      <h3>Score Tracker</h3>
      <p>Tracks P, G, and W — your corporate balance sheet.</p>
    </div>

    <div className="component-node" style={{ "--angle": "170deg" }}>
      <h3>Card Decks</h3>
      <p>Event cards that shape your career story.</p>
    </div>

    <div className="component-node" style={{ "--angle": "240deg" }}>
      <h3>Instruction Sheet</h3>
      <p>Defines the rules, fairness, and flow of play.</p>
    </div>

    <div className="component-node" style={{ "--angle": "300deg" }}>
      <h3>Player Board</h3>
      <p>Your personal space to plan, learn, and reflect.</p>
    </div>
  </div>
        </section>


      {/* Section 3 – Card Design */}
      <section className="game-section">
        <h2 className="section-title">Card Design</h2>
        <p className="section-desc">
          Each card type reflects a real-world workplace experience:
        </p>

        <div className="card-type-grid">
          <div className="card-type perf">
            <h3>Performance Cards</h3>
            <p>Simulate deliverables, project pressures, teamwork, and leadership moments.</p>
          </div>
          <div className="card-type grow">
            <h3>Growth Cards</h3>
            <p>Encourage upskilling, innovation, mentoring, and learning opportunities.</p>
          </div>
          <div className="card-type well">
            <h3>Well-being Cards</h3>
            <p>Promote stress management, self-care, and team harmony.</p>
          </div>
          <div className="card-type chal">
            <h3>Challenge Cards</h3>
            <p>Introduce dilemmas and trade-offs faced in real-world corporate decisions.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Design