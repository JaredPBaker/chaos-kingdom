import React from 'react';

function Card({ card, onPlay }) {
  const cardClass = `card ${card.type.toLowerCase()}-card`;

  return (
    <div className={cardClass} onClick={() => onPlay && onPlay(card.id)}>
      <h3>{card.name}</h3>
      <p>Cost: {card.cost} CP</p>
      {card.type === 'Creature' && <p>ATK: {card.atk} | DEF: {card.def}</p>}
      {card.type === 'Structure' && <p>DEF: {card.def}</p>}
      <p>{card.ability}</p>
    </div>
  );
}

export default Card;