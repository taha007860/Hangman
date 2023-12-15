import React, { useState, useEffect, useRef } from 'react';
import Popup from './Popup';
import WrongLetters from './WrongLetters';
import HangmanFigure from './HangmanFigure';
import "./Dashes.css";
const Dashes = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputLetters, setInputLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const inputRef = useRef(null);
  const [wordCompleted, setWordCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    resetGame();
  }, [words]);

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWordIndex(randomIndex);
    setInputLetters([]);
    setWrongLetters([]);
    setShowPopup(false);
    setPopupMessage('');
    setWordCompleted(false);
    setGameOver(false);
    inputRef.current.focus();
  };

  const currentWord = words[currentWordIndex];

  const handleKeyDown = (event) => {
    const { key } = event;
    if (/^[a-z]$/.test(key) && !gameOver) {
      if (inputLetters.includes(key)) {
        setShowPopup(true);
        setPopupMessage(`You have already entered the letter '${key}'.`);
      } else if (currentWord.includes(key)) {
        const newInputLetters = [...inputLetters];
        for (let i = 0; i < currentWord.length; i++) {
          if (currentWord[i] === key) {
            newInputLetters[i] = key;
          }
        }
        setInputLetters(newInputLetters);
        if (newInputLetters.join('') === currentWord) {
          setWordCompleted(true);
          setShowPopup(true);
          setPopupMessage(<div className="win-popup">
            <h2>Congratulations! You won! 😃</h2>
          </div>);
          setGameOver(true);
        }
      } else {
        if (wrongLetters.includes(key)) {
          setShowPopup(true);
          setPopupMessage(`You have already entered the wrong letter '${key}'.`);
        } else {
          const newWrongLetters = [...wrongLetters, key];
          setWrongLetters(newWrongLetters);
          if (newWrongLetters.length >= 6) {
            setShowPopup(true);
            setPopupMessage(<div className="Loss-popup">
              <h2>Unfortunately you lost. 😕</h2>
              <h3>...the word was: {currentWord}</h3>
            </div>);
            setGameOver(true);
          }
        }
      }
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setPopupMessage('');
    if (gameOver) {
      resetGame();
    } else {
      inputRef.current.focus();
    }
  };

  const dashes = currentWord.split('').map((letter, index) => {
    const inputLetter = inputLetters[index];
    return (
      <span key={index} className="dash">
        {letter === ' ' ? ' ' : (
          <span>
            <span className="input-letter">{inputLetter}</span>
            <span className="dash-character">_</span>
          </span>
        )}
      </span>
    );
  });

  return (
    <div className='container'>
      <div className='hangman'>
      <HangmanFigure wrongLetters={wrongLetters} />
      </div>
      <div className="dashes">
        <div
          className="word"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          ref={inputRef}
        >
          {dashes}
        </div>
        <div className='wrong'>
        <WrongLetters wrongLetters={wrongLetters} />
        </div>
        <div className='pop'>
        <Popup
          showPopup={showPopup}
          popupMessage={popupMessage}
          gameOver={gameOver}
          wordCompleted={wordCompleted}
          handlePopupClose={handlePopupClose}
        />
        </div>
      </div>
    </div>
  );
};

export default Dashes;