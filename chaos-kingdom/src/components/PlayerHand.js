import React from 'react';
import Card from './Card';

function PlayerHand({ player, onPlayCard, isCurrentPlayer }) {
  return (
    <div className="player-hand">
      <h2>Player Hand</h2>
      <div className="hand-cards">
        {player.hand.map((card) => (
          <Card 
            key={card.id} 
            card={card} 
            onPlay={isCurrentPlayer ? onPlayCard : null} 
          />
        ))}
      </div>
    </div>
  );
}

export default PlayerHand;