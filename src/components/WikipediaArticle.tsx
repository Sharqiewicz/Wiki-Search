import React, { useContext } from 'react'
import { WikiContext } from '../context/WikiContext';
import { ReplaceContext } from '../context/ReplaceContext';
import Highlighter from "react-highlight-words";
import { removeHTMLFromString } from '../helpers/index'

export default function WikipediaArticle({ article }: any) {

    const { searchedPhrase } = useContext(WikiContext);
    const { replacePhrase, isReplaceActive, isReplaceAll } = useContext(ReplaceContext);
    const searchedWords = isReplaceActive && replacePhrase.trim() ? [replacePhrase] : [searchedPhrase];

    const snippet = removeHTMLFromString(article.snippet)
    const title = removeHTMLFromString(article.title)

    const replaceWord = (text: string) => {
        return text.replace(searchedPhrase, replacePhrase)
    }

    const replaceAllWords = (text: string): string => {
        return text.replaceAll(searchedPhrase, replacePhrase)
    }

    const manageText = (text: string): string => {

        if (isReplaceActive && replacePhrase.trim()) {
            if (isReplaceAll) {
                return replaceAllWords(text);
            }
            return replaceWord(text);
        }
        return text;
    }

    return (
        <li key={article.id} className="wikiList__item">
            <h3><Highlighter searchWords={searchedWords} textToHighlight={manageText(title)} /></h3>
            <h4><Highlighter searchWords={searchedWords} textToHighlight={manageText(snippet)} /></h4>
        </li>
    )
}
