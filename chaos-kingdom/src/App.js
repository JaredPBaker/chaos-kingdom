import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Rules from './components/Rules';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/rules" component={Rules} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;