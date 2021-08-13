import React, { useContext } from 'react'

import WikipediaArticle from './WikipediaArticle';
import { IWikiArticle } from '../types/index'

import { WikiContext } from '../context/WikiContext';

export default function WikipediaArticlesList() {
    const { wikiList } = useContext(WikiContext);
    return (
        <ul className="wikiList__container">
            {wikiList.map((article: IWikiArticle, index: number) => <WikipediaArticle article={article} index={index} />)}
        </ul>
    )
}
