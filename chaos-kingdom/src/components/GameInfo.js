import React from 'react';

function GameInfo({ gameState }) {
  const currentPlayer = gameState.players[gameState.currentPlayer];

  return (
    <div className="game-info">
      <h2>Game Info</h2>
      <p>Current Player: {gameState.currentPlayer + 1}</p>
      <p>Turn: {gameState.turnNumber}</p>
      <p>Phase: {gameState.currentPhase}</p>
      <p>CP: {currentPlayer.cp}</p>
      <p>VP: {currentPlayer.vp}</p>
      <p>Cards in Deck: {gameState.deck.length}</p>
    </div>
  );
}

export default GameInfo;