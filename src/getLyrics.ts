import { searchSong } from './searchSong';
import { Options, checkOptions } from './utils';
import { extractLyrics } from './utils/extractLyrics';

/**
 * @param {Options | string} arg - options object, or Genius URL
 */
export async function getLyrics(arg: Options | string) {
  try {
    if (arg && typeof arg === 'string') {
      let lyrics = await extractLyrics(arg);
      return lyrics;
    } else if (typeof arg === 'object') {
      checkOptions(arg);
      let results = await searchSong(arg);
      if (!results) return null;
      let lyrics = await extractLyrics(results[0].url);
      return lyrics;
    } else {
      throw 'Invalid argument';
    }
  } catch (e) {
    throw e;
  }
}
