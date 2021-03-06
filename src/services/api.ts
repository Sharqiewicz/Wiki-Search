import axios from 'axios';
import { IWikiArticle } from '../types/index';

const REQUEST_LIMIT = 10;
const HOST: string = `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json`;

export async function searchPhrase(phrase: string): Promise<IWikiArticle[] | undefined> {
    try {
        const res = await axios.get(`${HOST}&srsearch=%22${phrase}%22&srlimit=${REQUEST_LIMIT}`);
        return res.data.query.search;
    } catch (err) {
        console.error(err);
    }

}