import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerHand from './components/PlayerHand';
import GameInfo from './components/GameInfo';
import { setupGame } from './utils/gameSetup';
import { playCard, endTurn } from './utils/gameLogic';

function App() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    setGameState(setupGame(2));
  }, []);

  const handlePlayCard = (cardId) => {
    setGameState((prevState) => playCard(prevState, prevState.currentPlayer, cardId));
  };

  const handleEndTurn = () => {
    setGameState((prevState) => endTurn(prevState));
  };

  if (!gameState) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Chaos Kingdom</h1>
      <div className="game-container">
        <GameInfo gameState={gameState} />
        <GameBoard gameState={gameState} />
        <PlayerHand 
          player={gameState.players[gameState.currentPlayer]} 
          onPlayCard={handlePlayCard}
          isCurrentPlayer={gameState.currentPlayer === 0}
        />
        {gameState.currentPlayer === 0 && (
          <button onClick={handleEndTurn}>End Turn</button>
        )}
      </div>
    </div>
  );
}

export default App;