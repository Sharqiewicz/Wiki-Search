import { createContext, Dispatch, SetStateAction } from 'react';
import { IWikiArticle } from '../types/index';


interface IWikiContext {
    wikiList: IWikiArticle[],
    searchedPhrase: string,
    isLoading: boolean,

    setSearchedPhrase: Dispatch<SetStateAction<string>> | null
    setWikiList: Dispatch<SetStateAction<IWikiArticle[]>> | null,
    setIsLoading: Dispatch<SetStateAction<boolean>> | null,
}

export const WikiContext = createContext<IWikiContext>({
    wikiList: [],
    searchedPhrase: '',
    isLoading: false,


    setSearchedPhrase: null,
    setWikiList: null,
    setIsLoading: null
});