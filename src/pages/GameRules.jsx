import React from "react";
import { FaDice, FaProjectDiagram, FaChartLine, FaUsers, FaTrophy, FaSkull } from "react-icons/fa";
import "./css/rules.css";

export default function GameRules() {
  const rules = [
    {
      icon: <FaProjectDiagram />,
      title: "Setup",
      points: [
        "Lay the board flat on a surface.",
        "Shuffle all card decks (P, G, W, C) and place them face down.",
        "Distribute one Score Tracker and token per player.",
        "Place all tokens on the START space.",
        "All players begin with equal base scores (e.g., 5 in each category).",
      ],
    },
    {
      icon: <FaDice />,
      title: "Turn Sequence",
      points: [
        "Roll the 3-sided die and move forward accordingly.",
        "Land on a space (P/G/W/C/Blank).",
        "Draw a card from the respective deck and follow the instructions.",
        "Update your scores based on card outcomes.",
        "If any score hits zero, skip the next turn ('recovery').",
        "If you land on a Challenge space, read aloud and apply effects.",
        "Pass the dice clockwise.",
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Scoring System",
      content: (
        <>
          <p>Each player maintains three evolving dimensions:</p>
          <ul>
            <li>Performance (P)</li>
            <li>Growth (G)</li>
            <li>Well-being (W)</li>
          </ul>
          <b>Finishing Bonus</b>
          <ul>
            <li>1st Finisher = +5 points</li>
            <li>2nd Finisher = +4 points</li>
            <li>3rd Finisher = +3 points</li>
            <li>4th Finisher = +2 points</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FaUsers />,
      title: "Group Interaction",
      points: [
        'Role-plays ("Convince your team to adopt a new policy")',
        'Mini quizzes ("HR Rapid-Fire: Name 3 engagement strategies")',
        'Wellness prompts (“Share one thing that reduces your stress”)',
      ],
      footer: "These group elements encourage collaboration and reflection.",
    },
    {
      icon: <FaTrophy />,
      title: "Winning Conditions",
      points: [
        "Complete the maze with positive, balanced scores in P, G, W.",
        "Highest total composite score wins.",
        "In case of a tie, consistency and no skipped turns decide.",
        "If no one achieves balance, the game ends with group reflection.",
      ],
      highlight: "YOU WIN!",
      footer:
        "Winning reflects strategy and emotional balance — not luck or speed. Ongoing refinements aim for fairness and meaningful growth.",
    },
    {
      icon: <FaSkull />,
      title: "Losing Conditions",
      points: [
        "If Well-being reaches zero twice, player exits (burnout).",
        "Cannot progress if two categories are at zero simultaneously.",
        "Game ends early if majority reach burnout or imbalance.",
      ],
      highlight: "GAME OVER",
    },
  ];

  return (
    <div className="game-rules-container">
      <h2 className="rules-title">🎯 Game Rules</h2>
      <hr className="divider" />
      <div className="rules-grid">
        {rules.map((r, i) => (
          <div key={i} className="rule-hex">
            <div className="rule-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            {r.points && (
              <ul>
                {r.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            )}
            {r.content && <div className="rule-content">{r.content}</div>}
            {r.highlight && <div className="rule-highlight">{r.highlight}</div>}
            {r.footer && <p className="rule-footer">{r.footer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
