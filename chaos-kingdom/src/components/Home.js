import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
    return (
        <div className="home">
            <h1>Chaos Kingdom</h1>
            <div className="menu">
                <Link to="/game" className="menu-button">Start Game</Link>
                <Link to="/rules" className="menu-button">Rules</Link>
            </div>
        </div>
    );
}
export default Home;