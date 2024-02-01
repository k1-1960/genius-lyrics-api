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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbumArt = void 0;
const searchSong_1 = require("./searchSong");
const utils_1 = require("./utils");
/**
 *
 * @param options
 */
function getAlbumArt(options) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.checkOptions)(options);
        let results = yield (0, searchSong_1.searchSong)(options);
        if (!results)
            return null;
        return results[0].albumArt;
    });
}
exports.getAlbumArt = getAlbumArt;
