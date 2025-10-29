import React from 'react'
import "./css/button.css"

const Button = ({label, onClick}) => {
return (
    <button className="neon-btn" onClick={onClick}>
    <span>{label}</span>
    </button>
)
}

export default Button;