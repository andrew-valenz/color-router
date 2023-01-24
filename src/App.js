import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import RGB from './components/RGB.js';

function App() {
  return (
    <Switch>
      <Route path="/:red/:green/:blue/">
        <RGB />
      </Route>
    </Switch>
  );
}

export default App;
