import React, { useContext } from 'react';
import { WikiContext } from '../context/WikiContext';
import { searchPhrase } from '../services/api';
import { DebounceInput } from 'react-debounce-input';


interface SearchProps {
    additionalStyles?: string;
    labelText: string;
    children?: React.ReactNode;
}

const Search: React.FC<SearchProps> = ({ additionalStyles, labelText, children }) => {

    const { setSearchedPhrase, searchedPhrase, setWikiList } = useContext(WikiContext);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setSearchedPhrase !== null && setWikiList !== null) {
            setSearchedPhrase(e.target.value);
            const response = await searchPhrase(e.target.value);
            setWikiList(response)
        }
    }

    return (
        <div className={`search__container ${additionalStyles}`}>
            <label className="search__label">{labelText}</label>
            <DebounceInput debounceTimeout={300} type="text" className="search__input" value={searchedPhrase} onChange={handleChange} />
            <div className="button__group">
                {children}
            </div>
        </div>
    )
}

export default Search;