import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import BarbershopList from './components/BarbershopList.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={BarbershopList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
