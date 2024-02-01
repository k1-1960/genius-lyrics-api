import axios from 'axios';
import { load } from 'cheerio';

/**
 * @param {string} url - Genius URL
 */
export async function extractLyrics(url: string) {
  try {
    let { data } = await axios.get(url);
    const $ = load(data);
    let lyrics = $('div[class="lyrics"]').text().trim();
    if (!lyrics) {
      lyrics = '';
      $('div[class^="Lyrics__Container"]').each((i: number, elem) => {
        let snippet = $(elem);
        if (snippet.html() && snippet.text().length !== 0) {
          let parsedSnipped = (snippet.html() as string)
            .replace(/<br>/g, '\n')
            .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
          lyrics += $('<textarea/>').html(parsedSnipped).text().trim() + '\n\n';
        }
      });
    }
    if (!lyrics) return null;
    return lyrics.trim();
  } catch (e) {
    throw e;
  }
}
