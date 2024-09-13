import React from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';
function Rules() {
    return (
        <div className="rules">
            <h1>Chaos Kingdom Rules</h1>
            <h2>Game Overview</h2>
            <p>
                Chaos Kingdom is a strategic card game where 2-6 players assume the roles of eccentric rulers of chaotic and fantastical kingdoms. Players build their kingdoms by summoning creatures, constructing structures, wielding powerful artifacts, and triggering chaotic events. The objective is to accumulate Victory Points (VPs) by outmaneuvering opponents, executing Chaos Combos, and capitalizing on unique Kingdom and Ruler abilities.
            </p>
            <h2>Basic Rules</h2>
            <ul>
                <li>Each player starts with 5 Chaos Points (CPs) and 5 cards in hand.</li>
                <li>On your turn, draw 2 cards and gain 2 CPs.</li>
                <li>Play cards by spending CPs equal to their cost.</li>
                <li>Use Creature cards to attack opponents and defend your kingdom.</li>
                <li>Build Structures to gain strategic advantages.</li>
                <li>Use Artifacts for ongoing benefits and to trigger powerful combos.</li>
                <li>Play Event cards to create chaos and disrupt your opponents.</li>
                <li>The first player to reach 20 Victory Points wins the game.</li>
            </ul>
            <Link to="/" className="back-button">Back to Home</Link>
        </div>
    );
}
export default Rules;