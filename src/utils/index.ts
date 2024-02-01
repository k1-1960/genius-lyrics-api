export { extractLyrics } from './extractLyrics';

interface Options {
  title: string;
  artist: string;
  apiKey: string; // Genius developer access token
  optimizeQuery?: boolean; // (optional, default: false) If true, perform some cleanup to maximize the chance of finding a match
  authHeader?: boolean; // (optional, default: false) Whether to include auth header in the search request
}

const checkOptions = (options: Options) => {
  let { apiKey, title, artist } = options;
  if (!apiKey) {
    throw '"apiKey" property is missing from options';
  } else if (!title) {
    throw '"title" property is missing from options';
  } else if (!artist) {
    throw '"artist" property is missing from options';
  }
};

const getTitle = (title: any, artist: any) => {
  return `${title} ${artist}`
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, '')
    .replace(/ *\[[^\]]*]/, '')
    .replace(/feat.|ft./g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

export { checkOptions, getTitle, Options };
