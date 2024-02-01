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
exports.getSongById = void 0;
const axios_1 = __importDefault(require("axios"));
const extractLyrics_1 = require("./utils/extractLyrics");
const url = 'https://api.genius.com/songs/';
/**
 * @param {(number|string)} id
 * @param {string} apiKey
 */
function getSongById(id, apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!id)
            throw 'No id was provided';
        if (!apiKey)
            throw 'No apiKey was provided';
        try {
            let { data: { response: { song }, }, } = yield axios_1.default.get(`${url}${id}?access_token=${apiKey}`);
            let lyrics = yield (0, extractLyrics_1.extractLyrics)(song.url);
            return {
                id: song.id,
                title: song.full_title,
                url: song.url,
                lyrics,
                albumArt: song.song_art_image_url,
            };
        }
        catch (e) {
            throw e;
        }
    });
}
exports.getSongById = getSongById;
