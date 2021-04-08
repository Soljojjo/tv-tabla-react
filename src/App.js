import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import TvPrograms from './components/TvPrograms';

function App() {
  return (
    <div className="App">

      <TvPrograms />
    </div>
  );
}

export default App;
/* Old stuff:
// <Sidebar />   not added currently

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Sidebar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          allting är 42 eller 43
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/