import { Options } from './utils';
/**
 * @param {Options & {optimizeQuery?: boolean}} options
 */
export declare function getSong(options: Options): Promise<{
    id: any;
    title: any;
    url: any;
    lyrics: string | null;
    albumArt: any;
} | null>;
