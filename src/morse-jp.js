"use strict";
import fs from 'fs'
import path from 'path'

/**
 * MorseJp モールス信号とテキストを相互に変換するクラス
 * @class MorseJp
 */
export default class MorseJp {
    /**
     *
     * @param {string} lang
     */
    constructor(lang = 'ja') {
        this.lang = lang;
    }

    /**
     *
     */
    get table() {
        let file = path.resolve(__dirname, '../locales/ja.json');
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    }

    /**
     *
     * @returns {{}}
     */
    get reverseTable() {
        let obj = {};
        for (let k in this.table) {
            obj[this.table[k]] = k;
        }
        return obj;
    }

    /**
     * テキストをモールス信号へ変換
     * @param {string} word
     * @returns {string}
     */
    word2morse(word) {
        let target = word.split('');
        let morse = [];

        for (let c of target) {
            morse.push(this.table[c]);
        }
        return morse.join(" ");
    }

    /**
     * モールス信号をテキストへ変換
     * @param {string} morse
     * @param {string} separate
     * @returns {string}
     */
    morse2word(morse, separate = ' ') {
        let target = morse.split(separate);
        let word = [];

        for (let c of target) {
            word.push(this.reverseTable[c]);
        }
        return word.join("");
    }
}
