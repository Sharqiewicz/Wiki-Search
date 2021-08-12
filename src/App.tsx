import React from 'react';
import './App.scss';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Search additionalStyles="search__container--accent" labelText="Search for a phrase">
          <button>Send</button>
          <button>Reset</button>
        </Search>
        <Search additionalStyles="search__container--inverted" labelText="Replace with text">
          <button>Replace</button>
          <button>Replace All</button>
        </Search>
      </main>
    </div >
  );
}

export default App;
