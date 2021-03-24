import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Make your playlist</h1>
          <p>Choose the service where you want to make your playlist:</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Spotify">Spotify Button</Link>
            </li>
            <li>
              <p>Deezer Button</p>
            </li>
            <li>
              <p>Soundcloud Button</p>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Spotify">
              <Spotify />
            </Route>
          </Switch>
          
        </header>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Spotify = () => (
  <div>
    <h1>Spotify</h1>
  </div>
);

export default App;
