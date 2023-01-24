import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import RGB from './components/RGB.js';
import Nav from './components/Nav.js';
import NotFound from './components/NotFound.js';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/:red/:green/:blue/" component={RGB} />
        <Route exact path="/" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
