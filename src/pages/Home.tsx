import React, { useContext } from 'react'

import { searchPhrase } from '../services/api'

import Search from '../components/Search'
import WikipediaArticlesList from '../components/WikipediaArticlesList';

import { WikiContext } from '../context/WikiContext'
import { ReplaceContext } from '../context/ReplaceContext';

const Home = () => {

    const { setIsLoading, searchedPhrase, setWikiList, isLoading, wikiList } = useContext(WikiContext);
    const { setIsReplaceActive, setIsReplaceAll, setReplaceIndex, replaceIndex } = useContext(ReplaceContext);

    const handleSearchClick = async () => {
        if (setIsLoading && setWikiList) {
            setIsLoading(true);
            const response = await searchPhrase(searchedPhrase);
            setWikiList(response);
            setIsLoading(false);
        }
    }

    const handleReplaceClick = () => {
        if (setIsReplaceActive && setReplaceIndex) {
            setIsReplaceActive(true);
            if (replaceIndex >= 10) {
                setReplaceIndex(0);
            }
            else {
                setReplaceIndex(state => state + 1)
            }
        }
    }
    const handleReplaceAllClick = () => {
        if (setIsReplaceActive && setIsReplaceAll) {
            setIsReplaceActive(true);
            setIsReplaceAll(true);
        }
    }

    console.log('replaceIndex', replaceIndex)
    return (
        <>
            <Search additionalStyles="search__container--accent" labelText="Search for a phrase" isSearchInput={true}>
                <button onClick={handleSearchClick}>Search Phrase</button>
            </Search>
            <Search additionalStyles="search__container--inverted" labelText="Replace with text" isSearchInput={false}>
                <button onClick={handleReplaceClick}>Replace</button>
                <button onClick={handleReplaceAllClick}>Replace All</button>
            </Search>
            {
                isLoading ? <h1>Loading</h1> : wikiList.length && searchedPhrase ? <WikipediaArticlesList /> : !wikiList.length && searchedPhrase ? <h1>No results found</h1> : null
            }
        </>
    )
}


export default Home;
