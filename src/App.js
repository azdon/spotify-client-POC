import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Testing if this works.
        </p>
        <div className='App'>
          <a href='http://localhost:8888'> Login to Spotify </a>
        </div>
      </header>
    </div>
  );
}

export default App;
