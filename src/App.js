import {React} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Partner from './pages/Partner'

import './styles/_main.css'
import FooterNavbar from './components/FooterNavbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact /> 
          <Route path='/about' component={About} /> 
          <Route path='/partner' component={Partner} /> 
        </Switch>
        <FooterNavbar />
      </Router>
    </div>
  );
}

export default App;
