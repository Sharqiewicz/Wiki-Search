import React, { useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';

import { searchPhrase } from '../services/api';

import { WikiContext } from '../context/WikiContext';
import { ReplaceContext } from '../context/ReplaceContext';


interface SearchProps {
    additionalStyles?: string;
    labelText: string;
    isSearchInput: boolean;
    children?: React.ReactNode;
}

const Search: React.FC<SearchProps> = ({ additionalStyles, labelText, children, isSearchInput }) => {

    const { setWikiList, setSearchedPhrase, searchedPhrase, setIsLoading } = useContext(WikiContext);
    const { replacePhrase, setReplacePhrase, setIsReplaceActive } = useContext(ReplaceContext);

    const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setSearchedPhrase && setWikiList && setIsLoading) {
            setIsLoading(true);
            setSearchedPhrase(e.target.value);
            const response = await searchPhrase(e.target.value);
            setWikiList(response)
            setIsLoading(false);
        }
    }

    const handleReplaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setReplacePhrase && setIsReplaceActive) {
            setIsReplaceActive(false);
            setReplacePhrase(e.target.value);
        }
    }

    return (
        <div className={`search__container ${additionalStyles}`}>
            <label className="search__label">{labelText}</label>
            <DebounceInput debounceTimeout={300} type="text" className="search__input" value={isSearchInput ? searchedPhrase : replacePhrase} onChange={isSearchInput ? handleSearchChange : handleReplaceChange} />
            <div className="button__group">
                {children}
            </div>
        </div>
    )
}

export default Search;