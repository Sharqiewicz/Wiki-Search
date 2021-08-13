import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search'
import { WikiContext } from './context/WikiContext'
import WikipediaArticlesList from './components/WikipediaArticlesList';
import { searchPhrase } from './services/api'

function App() {

  const [searchedPhrase, setSearchedPhrase] = useState('');
  const [replacePhrase, setReplacePhrase] = useState('');
  const [wikiList, setWikiList] = useState([]);
  const [isReplaceActive, setIsReplaceActive] = useState(false);

  const handleSearchClick = async () => {
    const response = await searchPhrase(searchedPhrase);
    setWikiList(response)
  }

  const handleReplaceClick = () => {
    setIsReplaceActive(true);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Search a phrase in Wikipedia</h1>
      </header>
      <main>
        <WikiContext.Provider value={{ setSearchedPhrase, setReplacePhrase, searchedPhrase, replacePhrase, wikiList, setWikiList, isReplaceActive, setIsReplaceActive }}>
          <Search additionalStyles="search__container--accent" labelText="Search for a phrase" isSearchInput={true}>
            <button onClick={handleSearchClick}>Search Phrase</button>
          </Search>
          <Search additionalStyles="search__container--inverted" labelText="Replace with text" isSearchInput={false}>
            <button onClick={handleReplaceClick}>Replace</button>
            <button>Replace All</button>
          </Search>
          {wikiList.length && searchedPhrase ? <WikipediaArticlesList /> : null}
        </WikiContext.Provider>
      </main>
    </div >
  );
}

export default App;
