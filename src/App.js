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

function App() {
  return (
    <div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to='/search-gifs'>Search for Gifs</Link>
          </li>
        </ul>
      </div>
      <Switch>
        {/* Route path="/"><Home></Home></Route> */}
      <Route path='/about'>
        <About></About>
      </Route>
    </Switch>
    </Router>
    
    <div className="App">
      <h1>Hello World</h1>
      <SearchGiphy></SearchGiphy>
    </div>
    </div>
  );
}

export default App;
