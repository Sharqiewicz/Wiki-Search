import { createContext, Dispatch, SetStateAction } from 'react';


interface IWikiContext {
    wikiList: any[],
    searchedPhrase: string,
    isLoading: boolean,

    setSearchedPhrase: Dispatch<SetStateAction<string>> | null
    setWikiList: Dispatch<SetStateAction<any>> | null,
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