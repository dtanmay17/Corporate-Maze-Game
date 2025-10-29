import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { levelUp } from "../features/playerSlice";
import "./css/landing.css"
import Button from "../components/Button.jsx";
import styled from "styled-components";

function Home() {
// const player = useSelector((state) => state.player);
// const dispatch = useDispatch();
useEffect(() => {
    const container = document.querySelector(".grid-bg");
    for (let i = 0; i < 120; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}, []);

const data = [
    { title: "HR LEARNING & DEVELOPMENT", text: "Enhancing understanding of performance-wellness trade-offs. " },
    { title: "MBA CLASSROOMS", text: "Teaching behavior under constraints, prioritization, and teamwork. " },
    { title: "CORPORATE TRAININGS", text: "Building empathy, communication, and stress-awareness among teams. " },
];

const handleStart = () => {
    console.log("Game starting...");
};

return (
    <div>
        <div className="landing-container">
            <div className="grid-bg"></div>
            <h1 className="landing-title">CORPORATE MAZE</h1>
            <p className="landing-tagline">Navigate. Strategize. Dominate.</p>
        </div>
        <div className="text-center" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"30px"}}>
            {/* <h2 className="text-4xl font-bold mb-4 text-emerald-400">Welcome</h2> */}
            <p className="text-gray-300 mb-4 landing-tagline">
                Step into the maze and outsmart your rivals in this corporate strategy board game.
            </p>
            <Button
                label="PLAY NOW"
                onClick={handleStart}
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-2 rounded-xl transition-all"
            >
            </Button>
        <hr style={{backgroundColor:"#00ffd5", height:"1px", border:"none", width:"95%"}}/>
        <h2 className="landing-headings">Value</h2>
        <div className="score-container">
        {data.map((box, i) => (
            <div key={i} className="score-box">
                <h3>{box.title}</h3>
                <p>{box.text}</p>
            </div>
        ))}
    </div>

        </div>
    </div>
);
}

export default Home;