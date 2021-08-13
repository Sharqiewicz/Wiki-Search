import React, { useState } from 'react';
import './App.scss';

import { WikiContext } from './context/WikiContext'
import { ReplaceContext } from './context/ReplaceContext'

import Home from './pages/Home';

function App() {

  const [searchedPhrase, setSearchedPhrase] = useState('');
  const [replacePhrase, setReplacePhrase] = useState('');
  const [wikiList, setWikiList] = useState([]);
  const [isReplaceActive, setIsReplaceActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReplaceAll, setIsReplaceAll] = useState(false);
  const [replaceIndex, setReplaceIndex] = useState(-1);

  return (
    <div className="App">
      <header className="app__header">
        <h1>Search a phrase in Wikipedia</h1>
      </header>
      <main>
        <WikiContext.Provider value={{ setSearchedPhrase, searchedPhrase, wikiList, setWikiList, setIsLoading, isLoading }}>
          <ReplaceContext.Provider value={{ setReplacePhrase, replacePhrase, isReplaceActive, setIsReplaceActive, isReplaceAll, setIsReplaceAll, replaceIndex, setReplaceIndex }}>
            <Home />
          </ReplaceContext.Provider>
        </WikiContext.Provider>
      </main>
    </div >
  );
}

export default App;
