/**
 * @param {(number|string)} id
 * @param {string} apiKey
 */
export declare function getSongById(id: number | string, apiKey: string): Promise<{
    id: any;
    title: any;
    url: any;
    lyrics: string | null;
    albumArt: any;
}>;
