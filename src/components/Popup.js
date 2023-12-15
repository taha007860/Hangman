import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ showPopup, popupMessage, gameOver, wordCompleted, handlePopupClose }) => {
  const getPopupClass = () => {
    if (!gameOver && !wordCompleted) {
      return 'popup-close';
    } else if (!wordCompleted && gameOver) {
      return 'popup-try-again';
    } else if (wordCompleted && gameOver) {
      return 'popup-play-again';
    }
    return 'popup-default'; // Add a default class if needed
  };

  useEffect(() => {
    // Set a timeout to hide the popup after 2 seconds for the 'popup-close' class
    if (!gameOver && !wordCompleted) {
      const timeoutId = setTimeout(() => {
        handlePopupClose();
      }, 1000);

      // Clear the timeout when the component unmounts or when the next popup appears
      return () => clearTimeout(timeoutId);
    }
  }, [showPopup, gameOver, wordCompleted, handlePopupClose]);
  
  return (
    <>
      {showPopup && <div className="overlay" />}
      {showPopup && (
        <div className={`popup ${getPopupClass()}`}>
          <span>{popupMessage}</span>
          {!wordCompleted && gameOver && (
            <button id="try-again-button" onClick={handlePopupClose}>Try Again</button>
          )}
          {wordCompleted && gameOver && (
            <button id="play-again-button" onClick={handlePopupClose}>Play Again</button>
          )}
        </div>
      )}
    </>
  );
};

export default Popup;