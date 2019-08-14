import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import BarbershopList from './components/BarbershopList.js';
import BarbershopForm from './components/BarbershopForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={BarbershopList}/>
          <Route path='/barbershops/new' component={BarbershopForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
