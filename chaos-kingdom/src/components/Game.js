import React, { useState, useEffect } from 'react';
import { initializeGame, drawCard, playCard, endTurn } from '../gameLogic';
import Board from './Board';
import Hand from './Hand';
import PlayerInfo from './PlayerInfo';
import './Game.css';
function Game() {
const [gameState, setGameState] = useState(null);
const [currentPlayer, setCurrentPlayer] = useState(0);
useEffect(() => {
const initialState = initializeGame(2); // Start with 2 players
setGameState(initialState);
}, []);
const handleDrawCard = () => {
if (gameState) {
const updatedState = drawCard(gameState, currentPlayer);
setGameState(updatedState);
}
};
const handlePlayCard = (cardIndex) => {
if (gameState) {
const updatedState = playCard(gameState, currentPlayer, cardIndex);
setGameState(updatedState);
}
};
const handleEndTurn = () => {
if (gameState) {
const updatedState = endTurn(gameState, currentPlayer);
setGameState(updatedState);
setCurrentPlayer((currentPlayer + 1) % gameState.players.length);
}
};
if (!gameState) {
return <div>Loading...</div>;
}
return (
<div className="game">
<Board gameState={gameState} />
<Hand
     hand={gameState.players[currentPlayer].hand}
     onPlayCard={handlePlayCard}
   />
<PlayerInfo
     player={gameState.players[currentPlayer]}
     onDrawCard={handleDrawCard}
     onEndTurn={handleEndTurn}
   />
</div>
);
}
export default Game;