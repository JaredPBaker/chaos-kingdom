import React from 'react';
import Card from './Card';
import './Hand.css';
function Hand({ hand, onPlayCard }) {
    return (
        <div className="hand">
            {hand.map((card, index) => (
                <div key={index} onClick={() => onPlayCard(index)}>
                    <Card card={card} />
                </div>
            ))}
        </div>
    );
}
export default Hand;