import React, { useContext } from 'react';
import { WikiContext } from '../context/WikiContext';
import { searchPhrase } from '../services/api';
import { DebounceInput } from 'react-debounce-input';


interface SearchProps {
    additionalStyles?: string;
    labelText: string;
    children?: React.ReactNode;
    isSearchInput: boolean;
}

const Search: React.FC<SearchProps> = ({ additionalStyles, labelText, children, isSearchInput }) => {

    const { setWikiList, setSearchedPhrase, searchedPhrase, replacePhrase, setReplacePhrase, setIsReplaceActive, setIsLoading } = useContext(WikiContext);

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