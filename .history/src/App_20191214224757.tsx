import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter basename='/'>
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
