import { Route, Router } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Donation from './components/Donation';
import Transfer from './components/Transfer';

function App() {
  return (
    <Donation>
      <Router>
        <Route exact path='/' component={Card} />
        <Route exact path='/Transfer' componet={Transfer} />
      </Router>
    </Donation>
  );
}

export default App;
