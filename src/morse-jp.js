"use strict";

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

    get table() {
        return {
            'あ': '--.--',
            'い': '.-',
            'う': '..-',
            'え': '-.---',
            'お': '.-...',
            'か': '.-..',
            'き': '-.-..',
            'く': '...-',
            'け': '-.--',
            'こ': '----',
            'さ': '-.-.-',
            'し': '--.-.',
            'す': '---.-',
            'せ': '.---.',
            'そ': '---.',
            'た': '-.',
            'ち': '..-.',
            'つ': '.--.',
            'て': '.-.--',
            'と': '..-..',
            'な': '.-.',
            'に': '-.-.',
            'ぬ': '....',
            'ね': '--.-',
            'の': '..--',
            'は': '-...',
            'ひ': '--..-',
            'ふ': '--..',
            'へ': '.',
            'ほ': '-..',
            'ま': '-..-',
            'み': '..-.-',
            'む': '-',
            'め': '-...-',
            'も': '-..-.',
            'や': '.--',
            'ゆ': '-..--',
            'よ': '--',
            'ら': '...',
            'り': '--.',
            'る': '-.--.',
            'れ': '---',
            'ろ': '.-.-',
            'わ': '-.-',
            'を': '.---',
            'ん': '.-.-.'
        }
    }

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
