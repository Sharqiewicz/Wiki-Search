import React, { useContext } from 'react'
import { WikiContext } from '../context/WikiContext';
import Highlighter from "react-highlight-words";

export default function WikipediaArticle({ article }: any) {

    const { searchedPhrase, replacePhrase } = useContext(WikiContext);

    return (
        <li key={article.id} className="wikiList__item">
            <h3><Highlighter searchWords={[searchedPhrase, replacePhrase]} textToHighlight={article.title.replaceAll(searchedPhrase, replacePhrase)} /></h3>
            <h4><Highlighter searchWords={[searchedPhrase, replacePhrase]} textToHighlight={article.snippet.replaceAll(searchedPhrase, replacePhrase)} /></h4>
        </li>
    )
}
