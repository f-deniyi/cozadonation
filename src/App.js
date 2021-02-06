import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardOption from './components/CardOption';
import Donation from './components/Donation';
import Transfer from './components/Transfer';


function App() {
  return (
    <BrowserRouter>
      <Donation>
        <Switch>
          <Route exact path='/' component={CardOption}/>
          <Route exact path='/Transfer' component={Transfer} />
        </Switch>
      </Donation>
    </BrowserRouter>
  );
}

export default App;
