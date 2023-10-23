import React, { useState } from "react";

function GuessInput({ handleSubmitGuesses, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuesses(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
