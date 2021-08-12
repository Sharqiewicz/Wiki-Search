import React, { useState } from 'react'


interface SearchProps {
    additionalStyles?: string;
    labelText: string;
    children?: React.ReactNode
}

const Search: React.FC<SearchProps> = ({ additionalStyles, labelText, children }) => {

    const [phrase, setPhrase] = useState('');

    return (
        <div className={`search__container ${additionalStyles}`}>
            <label className="search__label">{labelText}</label>
            <input type="text" className="search__input" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
            <div className="button__group">
                {children}
            </div>
        </div>
    )
}

export default Search;