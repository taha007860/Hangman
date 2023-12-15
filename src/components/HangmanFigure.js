import React from 'react';
import "./HangmanFigure.css";
const HangmanFigure = ({ wrongLetters }) => {
  const parts = [
    // Head
    <circle key="head" cx="100" cy="50" r="20" />,
    // Body
    <line key="body" x1="100" y1="70" x2="100" y2="100" />,
    // Arms
    <line key="left-arm" x1="100" y1="80" x2="70" y2="90" />,
    <line key="right-arm" x1="100" y1="80" x2="130" y2="90" />,
    // Legs
    <line key="left-leg" x1="100" y1="100" x2="80" y2="120" />,
    <line key="right-leg" x1="100" y1="100" x2="120" y2="120" />,
  ];

  const visibleParts = parts.slice(0, wrongLetters.length);

  return (
    <div>
      <svg width="150" height="200">
        {/* Gallows */}
        <line x1="20" y1="180" x2="100" y2="180" />
        <line x1="60" y1="20" x2="60" y2="180" />
        <line x1="58" y1="20" x2="102" y2="20" />
        <line x1="100" y1="20" x2="100" y2="40" />
        {/* Visible parts */}
        {visibleParts}
      </svg>
    </div>
  );
};

export default HangmanFigure;
