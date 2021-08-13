import { createContext, Dispatch, SetStateAction } from 'react';


interface IReplaceContext {
    setReplacePhrase: Dispatch<SetStateAction<string>> | null
    setIsReplaceActive: Dispatch<SetStateAction<boolean>> | null
    setIsReplaceAll: Dispatch<SetStateAction<boolean>> | null,
    setReplaceIndex: Dispatch<SetStateAction<number>> | null,

    isReplaceActive: boolean,
    isReplaceAll: boolean,
    replaceIndex: number
    replacePhrase: string,
}

export const ReplaceContext = createContext<IReplaceContext>({
    setIsReplaceAll: null,
    setReplaceIndex: null,
    setReplacePhrase: null,
    setIsReplaceActive: null,

    replacePhrase: '',
    isReplaceActive: false,
    isReplaceAll: false,
    replaceIndex: 1,
});