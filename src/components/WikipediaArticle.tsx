import React, { useContext } from 'react'
import Highlighter from "react-highlight-words";

import { removeHTMLFromString } from '../helpers/index'
import { IWikiArticle } from '../types/index'

import { WikiContext } from '../context/WikiContext';
import { ReplaceContext } from '../context/ReplaceContext';

interface IWikiArticleProps {
    article: IWikiArticle;
    index: number;
}

const WikipediaArticle: React.FC<IWikiArticleProps> = ({ article, index }: IWikiArticleProps) => {

    const { searchedPhrase } = useContext(WikiContext);
    const { replacePhrase, isReplaceActive, isReplaceAll, replaceIndex } = useContext(ReplaceContext);
    const searchedWords = isReplaceActive && replacePhrase.trim() ? [replacePhrase] : [searchedPhrase];

    const snippet = removeHTMLFromString(article.snippet)
    const title = removeHTMLFromString(article.title)

    const replaceWord = (text: string) => {
        return text.replace(new RegExp(searchedPhrase, "ig"), replacePhrase)
    }

    const replaceAllWords = (text: string): string => {
        return text.replaceAll(new RegExp(searchedPhrase, "ig"), replacePhrase)
    }

    const manageText = (text: string): string => {
        if (isReplaceActive && replacePhrase.trim()) {
            if (isReplaceAll) {
                return replaceAllWords(text);
            }
            if (index <= replaceIndex) {
                return replaceWord(text);
            }
        }
        return text;
    }

    return (
        <li className="wikiList__item">
            <h3><Highlighter searchWords={searchedWords} textToHighlight={manageText(title)} /></h3>
            <h4><Highlighter searchWords={searchedWords} textToHighlight={manageText(snippet)} /></h4>
        </li>
    )
}

export default WikipediaArticle;