import axios from 'axios';
import { checkOptions, getTitle, Options } from './utils';

const searchUrl: string = 'https://api.genius.com/search?q=';

/**
 * @param {Options} options
 */
export async function searchSong(options: Options) {
  try {
    checkOptions(options);
    let {
      apiKey,
      title,
      artist,
      optimizeQuery = false,
      authHeader = false,
    } = options;
    const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
    const reqUrl = `${searchUrl}${encodeURIComponent(song)}`;
    const headers = {
      Authorization: 'Bearer ' + apiKey,
    };
    let { data } = await axios.get(
      authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`,
      authHeader ? { headers: { Authorization: 'Bearer TuToken' } } : {}
    );
    if (data.response.hits.length === 0) return null;
    const results = data.response.hits.map(
      (val: {
        result: { full_title: any; song_art_image_url: any; id: any; url: any };
      }) => {
        const { full_title, song_art_image_url, id, url } = val.result;
        return { id, title: full_title, albumArt: song_art_image_url, url };
      }
    );
    return results;
  } catch (e) {
    throw e;
  }
}
