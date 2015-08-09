"use strict";
import fs from 'fs'
import path from 'path'

/**
 * MorseJp モールス信号とテキストを相互に変換するクラス
 * @class MorseJp
 */
export default class MorseJp {
    table = {};
    reverseTable = {};

    /**
     *
     * @param {string} lang
     */
    constructor(lang = 'ja') {
        this.loadFile(lang);
    }

    /**
     * localesディレクトリからモールス信号の定義ファイルをロードする
     */
    loadFile(lang) {
        let file = path.resolve(__dirname, `../locales/${lang}.json`);
        if (fs.existsSync(file)) {
            this.table = JSON.parse(fs.readFileSync(file, 'utf8'));
            for (let k in this.table) {
                if (this.table.hasOwnProperty(k)) {
                    this.reverseTable[this.table[k]] = k;
                }
            }
        } else {
            console.error(`Failed to read ${lang}.json`);
            process.exit(1);
        }
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
