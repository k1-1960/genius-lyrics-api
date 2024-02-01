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
exports.searchSong = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
const searchUrl = 'https://api.genius.com/search?q=';
/**
 * @param {Options} options
 */
function searchSong(options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, utils_1.checkOptions)(options);
            let { apiKey, title, artist, optimizeQuery = false, authHeader = false, } = options;
            const song = optimizeQuery ? (0, utils_1.getTitle)(title, artist) : `${title} ${artist}`;
            const reqUrl = `${searchUrl}${encodeURIComponent(song)}`;
            const headers = {
                Authorization: 'Bearer ' + apiKey,
            };
            let { data } = yield axios_1.default.get(authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`, authHeader ? { headers: { Authorization: 'Bearer TuToken' } } : {});
            if (data.response.hits.length === 0)
                return null;
            const results = data.response.hits.map((val) => {
                const { full_title, song_art_image_url, id, url } = val.result;
                return { id, title: full_title, albumArt: song_art_image_url, url };
            });
            return results;
        }
        catch (e) {
            throw e;
        }
    });
}
exports.searchSong = searchSong;
