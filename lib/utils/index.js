"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitle = exports.checkOptions = exports.extractLyrics = void 0;
var extractLyrics_1 = require("./extractLyrics");
Object.defineProperty(exports, "extractLyrics", { enumerable: true, get: function () { return extractLyrics_1.extractLyrics; } });
const checkOptions = (options) => {
    let { apiKey, title, artist } = options;
    if (!apiKey) {
        throw '"apiKey" property is missing from options';
    }
    else if (!title) {
        throw '"title" property is missing from options';
    }
    else if (!artist) {
        throw '"artist" property is missing from options';
    }
};
exports.checkOptions = checkOptions;
const getTitle = (title, artist) => {
    return `${title} ${artist}`
        .toLowerCase()
        .replace(/ *\([^)]*\) */g, '')
        .replace(/ *\[[^\]]*]/, '')
        .replace(/feat.|ft./g, '')
        .replace(/\s+/g, ' ')
        .trim();
};
exports.getTitle = getTitle;
