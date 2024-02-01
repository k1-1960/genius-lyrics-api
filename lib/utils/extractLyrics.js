"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractLyrics = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
/**
 * @param {string} url - Genius URL
 */
function extractLyrics(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { data } = yield axios_1.default.get(url);
            const $ = (0, cheerio_1.load)(data);
            let lyrics = $('div[class="lyrics"]').text().trim();
            if (!lyrics) {
                lyrics = '';
                $('div[class^="Lyrics__Container"]').each((i, elem) => {
                    let snippet = $(elem);
                    if (snippet.html() && snippet.text().length !== 0) {
                        let parsedSnipped = snippet.html()
                            .replace(/<br>/g, '\n')
                            .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
                        lyrics += $('<textarea/>').html(parsedSnipped).text().trim() + '\n\n';
                    }
                });
            }
            if (!lyrics)
                return null;
            return lyrics.trim();
        }
        catch (e) {
            throw e;
        }
    });
}
exports.extractLyrics = extractLyrics;
