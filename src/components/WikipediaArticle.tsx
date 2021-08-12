import React, { useContext } from 'react'
import { WikiContext } from '../context/WikiContext';
import Highlighter from "react-highlight-words";

export default function WikipediaArticle({ article }: any) {

    const { searchedPhrase } = useContext(WikiContext);

    return (
        <li key={article.id} className="wikiList__item">
            <h3><Highlighter searchWords={[searchedPhrase]} textToHighlight={article.title} /></h3>
            <h4><Highlighter searchWords={[searchedPhrase]} textToHighlight={article.snippet} /></h4>
        </li>
    )
}
