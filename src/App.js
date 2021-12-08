import logo from './logo.svg';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import SearchGiphy from './components/searchGiphy';
import About from './components/About'
import Home from './components/Home';
import Navi from './components/Navi';

function App() {
  return (
    <div>
    <Router>
      <div>
        <Navi />
        
      </div>
      <Switch>
        
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/search-gifs'>
        <SearchGiphy></SearchGiphy>
      </Route>
    </Switch>
    </Router>
    
    <div className="App">
      <h1>Hello World</h1>
      
    </div>
    </div>
  );
}

export default App;
