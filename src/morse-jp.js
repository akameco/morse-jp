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
        this.initTable(lang);
    }


    /**
     * テーブルを初期化する
     * @param {string} lang
     */
    initTable(lang) {
        this.table = this.loadFile(lang);
        for (let k in this.table) {
            if (this.table.hasOwnProperty(k)) {
                this.reverseTable[this.table[k]] = k;
            }
        }
    }

    /**
     * localesディレクトリからモールス信号の定義ファイルをロードする
     */
    loadFile(lang) {
        let file = path.resolve(__dirname, `../locales/${lang}.json`);
        if (fs.existsSync(file)) {
            return JSON.parse(fs.readFileSync(file, 'utf8'));
        } else {
            console.error(`Failed to read ${lang}.json`);
        }
    }

    /**
     * テキストをモールス信号へ変換
     * @param {string} word
     * @param {string} separate
     * @returns {string}
     */
    word2morse(word, separate = ' ') {
        let target = word.split('');
        let result = [];
        for (let c of target) {
            result.push(this.table[c]);
        }
        return result.join(separate);
    }

    /**
     * モールス信号をテキストへ変換
     * @param {string} morse
     * @param {string} separate
     * @returns {string}
     */
    morse2word(morse, separate = ' ') {
        let target = morse.split(separate);
        let result = [];
        for (let c of target) {
            result.push(this.reverseTable[c]);
        }
        return result.join("");
    }
}
