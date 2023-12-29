
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Movies
        </div>
        <div className='search-box'>
          <input type="text" name="movie" id="movie" />
          <span>Search</span>
        </div>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
