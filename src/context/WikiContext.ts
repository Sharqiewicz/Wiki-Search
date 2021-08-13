import { createContext, Dispatch, SetStateAction } from 'react';


interface IWikiContext {
    wikiList: any[],
    replacePhrase: string,
    searchedPhrase: string,
    setSearchedPhrase: Dispatch<SetStateAction<string>> | null
    setReplacePhrase: Dispatch<SetStateAction<string>> | null
    setIsReplaceActive: Dispatch<SetStateAction<boolean>> | null
    setWikiList: Dispatch<SetStateAction<any>> | null,
    isReplaceActive: boolean
}
export const DEFAULT_WIKICONTEXT = { wikiList: [], replacePhrase: '', searchedPhrase: '' }
export const WikiContext = createContext<IWikiContext>({
    wikiList: [],
    replacePhrase: '',
    searchedPhrase: '',
    setSearchedPhrase: null,
    setReplacePhrase: null,
    setWikiList: null,
    setIsReplaceActive: null,
    isReplaceActive: false
});