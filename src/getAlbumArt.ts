import { Options } from './utils';

import { searchSong } from './searchSong';
import { checkOptions } from './utils';

/**
 *
 * @param options
 */
export async function getAlbumArt(options: Options) {
  checkOptions(options);
  let results = await searchSong(options);
  if (!results) return null;
  return results[0].albumArt;
}
