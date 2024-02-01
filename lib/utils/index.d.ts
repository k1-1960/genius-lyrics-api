export { extractLyrics } from './extractLyrics';
interface Options {
    title: string;
    artist: string;
    apiKey: string;
    optimizeQuery?: boolean;
    authHeader?: boolean;
}
declare const checkOptions: (options: Options) => void;
declare const getTitle: (title: any, artist: any) => string;
export { checkOptions, getTitle, Options };
