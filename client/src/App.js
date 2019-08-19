import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import BarbershopList from './components/BarbershopList.js';
import BarbershopForm from './components/BarbershopForm';
import Barbershop from './components/Barbershop';
import BarberList from './components/BarberList';
import BarberForm from './components/BarberForm';
import Barber from './components/Barber'
import EditBarberForm from './components/EditBarberForm';
import StyleForm from './components/StyleForm';
import StyleList from './components/StyleList'
import Style from './components/Style'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={BarbershopList}/>
          <Route path='/barbershops/new' component={BarbershopForm}/>
          <Route path='/barbershops/:barbershopId/barbers/new' component={BarberForm}/>
          <Route path='/barbershops/:barbershopId' component={Barbershop} />
          <Route exact path='/barbers' component={BarberList}/>
          <Route exact path='/barbers/:barberId/edit' component={EditBarberForm}/>
          <Route path='/barbers/:barberId' component={Barber}/>
          <Route exact path='/styles' component={StyleList}/>
          <Route path='/styles/new' component={StyleForm}/>
          <Route path='/styles/:styleId' component={Style}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
