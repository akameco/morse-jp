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
     * @param separate
     * @param dash
     * @param dot
     * @returns {string}
     */
    word2morse(word, {separate = ' ', dash = '-', dot = '.'} = {}) {
        let target = word.split('');
        let result = [];
        for (let c of target) {
            result.push(this.table[c].replace(/\-/g, dash).replace(/\./g, dot));
        }
        return result.join(separate);
    }

    /**
     * モールス信号をテキストへ変換
     * @param {string} morse
     * @param {string} separate
     * @param {string} dash
     * @param {string} dot
     * @returns {string}
     */
    morse2word(morse, {separate = " ", dash = "\\-", dot = "\\."} = {}) {
        let reDash = new RegExp(dash, 'g');
        let reDot = new RegExp(dot, 'g');
        var target = morse.replace(reDash, '-').replace(reDot, '.').split(separate);
        let result = [];
        for (let c of target) {
            result.push(this.reverseTable[c]);
        }
        return result.join("");
    }
}
