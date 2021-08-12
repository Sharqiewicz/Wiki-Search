import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search'
import { WikiContext } from './context/WikiContext'

function App() {

  const [searchedPhrase, setSearchedPhrase] = useState('');
  const [replacePhrase, setReplacePhrase] = useState('');
  const [wikiList, setWikiList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <WikiContext.Provider value={{ setSearchedPhrase, setReplacePhrase, searchedPhrase, replacePhrase, wikiList, setWikiList }}>
          <Search additionalStyles="search__container--accent" labelText="Search for a phrase">
            <button>Send</button>
            <button>Reset</button>
          </Search>
          <Search additionalStyles="search__container--inverted" labelText="Replace with text">
            <button>Replace</button>
            <button>Replace All</button>
          </Search>
          {wikiList.length ? <div>LIST<pre>{setWikiList}</pre></div> : null}
        </WikiContext.Provider>
      </main>
    </div >
  );
}

export default App;
