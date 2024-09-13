import React from 'react';
import Card from './Card';
import './Board.css';
function Board({ gameState }) {
    return (
        <div className="board">
            {gameState.players.map((player, index) => (
                <div key={index} className="player-area">
                    <h3>Player {index + 1}</h3>
                    <div className="played-cards">
                        {player.playedCards.map((card, cardIndex) => (
                            <Card key={cardIndex} card={card} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Board;