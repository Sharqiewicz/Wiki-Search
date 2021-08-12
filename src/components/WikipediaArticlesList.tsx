import React, { useContext } from 'react'
import WikipediaArticle from './WikipediaArticle';
import { WikiContext } from '../context/WikiContext';

export default function WikipediaArticlesList() {
    const { wikiList } = useContext(WikiContext);
    return (
        <ul className="wikiList__container">
            {wikiList.map((article: any) => <WikipediaArticle article={article} />)}
        </ul>
    )
}
