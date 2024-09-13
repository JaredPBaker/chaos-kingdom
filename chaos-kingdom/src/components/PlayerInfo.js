import React from 'react';
import './PlayerInfo.css';
function PlayerInfo({ player, onDrawCard, onEndTurn }) {
return (
<div className="player-info">
<h2>Player {player.id}</h2>
<p>Chaos Points: {player.chaosPoints}</p>
<p>Victory Points: {player.victoryPoints}</p>
<button onClick={onDrawCard}>Draw Card</button>
<button onClick={onEndTurn}>End Turn</button>
</div>
);
}
export default PlayerInfo;