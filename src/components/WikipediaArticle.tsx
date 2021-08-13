import React, { useContext } from 'react'
import { WikiContext } from '../context/WikiContext';
import Highlighter from "react-highlight-words";
import { removeHTMLFromString } from '../helpers/index'

export default function WikipediaArticle({ article }: any) {

    const { searchedPhrase, replacePhrase, isReplaceActive } = useContext(WikiContext);
    const searchedWords = isReplaceActive && replacePhrase.trim() ? [replacePhrase] : [searchedPhrase];

    console.log(isReplaceActive, replacePhrase.trim());

    console.log(article);

    const snippet = removeHTMLFromString(article.snippet)
    const title = removeHTMLFromString(article.title)

    return (
        <li key={article.id} className="wikiList__item">
            <h3><Highlighter searchWords={searchedWords} textToHighlight={isReplaceActive && replacePhrase.trim() ? title.replaceAll(searchedPhrase, replacePhrase) : title} /></h3>
            <h4><Highlighter searchWords={searchedWords} textToHighlight={isReplaceActive && replacePhrase.trim() ? snippet.replaceAll(searchedPhrase, replacePhrase) : snippet} /></h4>
        </li>
    )
}
