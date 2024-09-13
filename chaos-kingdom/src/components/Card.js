import React from 'react';
import './Card.css';
function Card({ card }) {
  return (
    <div className={card ${card.type.toLowerCase()}}>
<h3>{card.name}</h3>
<p>Cost: {card.cost} CP</p>
{
  card.type === 'Creature' && (
    <div>
      <p>ATK: {card.attack}</p>
      <p>DEF: {card.defense}</p>
    </div>
  )
}
{ card.type === 'Structure' && <p>DEF: {card.defense}</p> }
<p className="ability">{card.ability}</p>
</div >
);
}
export default Card;