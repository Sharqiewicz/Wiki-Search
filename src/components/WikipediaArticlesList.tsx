import React, { useContext } from 'react'
import WikipediaArticle from './WikipediaArticle';
import { WikiContext } from '../context/WikiContext';

export default function WikipediaArticlesList() {
    const { wikiList } = useContext(WikiContext);
    return (
        <div>
            {wikiList.map((article: any) => <WikipediaArticle article={article} />)}
        </div>
    )
}
