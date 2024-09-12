import React from 'react';
import Card from './Card';

function GameBoard({ gameState }) {
  return (
    <div className="game-board">
      {gameState.players.map((player, index) => (
        <div key={index} className="player-area">
          <h3>Player {index + 1}</h3>
          <div className="played-cards">
            {player.playArea.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameBoard;