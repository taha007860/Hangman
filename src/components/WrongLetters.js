import React from 'react';
import "./WrongLetters.css";
const WrongLetters = ({ wrongLetters }) => {
  const wrongLettersDisplay = wrongLetters.map((letter, index) => (
    <span key={index} className="wrong-letter">{letter}{index < wrongLetters.length - 1 ? ',' : ''}</span>
  ));

  return (
    <div className="wrong-letters">
      <p>Wrong Letters: </p>
      <p>{wrongLettersDisplay}</p>
    </div>
  );
};

export default WrongLetters;

