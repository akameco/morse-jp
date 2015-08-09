"use strict";

import support from 'source-map-support'
support.install();

import assert from 'power-assert'
import MorseJp from "../src/morse-jp";

describe("morse-jp-test", ()=> {
    describe("#word2morse", ()=> {
        let morseJp = new MorseJp();
        let word = 'こんにちわ';

        it("'こんにちわ'が'---- .-.-. -.-. ..-. -.-'になること", ()=> {
            let morse = '---- .-.-. -.-. ..-. -.-';
            assert(morseJp.word2morse(word) === morse);
        });

        it("'10'が'.---- -----'になること", ()=> {
            let morse = '.---- -----';
            let word = '10';
            assert(morseJp.word2morse(word) === morse);
        });

        context('separateに*を引数にとるとき', ()=> {
            it("'こんにちわ'が'----*.-.-.*-.-.*..-.*-.-'になること", ()=> {
                let morse = '----*.-.-.*-.-.*..-.*-.-';
                assert(morseJp.word2morse(word, {separate: '*'}) === morse);
            });
        });

        context("dashに'は'dotに'い'を引数にとるとき", ()=> {
            it("'こんにちわ'が'はははは いはいはい はいはい いいはい はいは'になること", ()=> {
                let morse = 'はははは いはいはい はいはい いいはい はいは';
                assert(morseJp.word2morse(word, {dash: 'は', dot: 'い'}) === morse);
            });
        });
    });

    describe("#morse2word", ()=> {
        let morseJp = new MorseJp();
        let word = 'こんにちわ';

        it("'---- .-.-. -.-. ..-. -.-'が'こんにちわ'になること", ()=> {
            let morse = '---- .-.-. -.-. ..-. -.-';
            assert(morseJp.morse2word(morse) === word);
        });

        it("'----*.-.-.*-.-.*..-.*-.-'が'こんにちわ'になること", ()=> {
            let morse = '----*.-.-.*-.-.*..-.*-.-';
            assert(morseJp.morse2word(morse, {separate: '*'}) === word);
        });

        context("dashに'は'dotに'い'を引数にとるとき", ()=> {
            it("'はははは いはいはい はいはい いいはい はいは'がこんにちわになること", ()=> {
                let morse = 'はははは いはいはい はいはい いいはい はいは';
                assert(morseJp.morse2word(morse, {dash: 'は', dot: 'い'}) === word);
            });
        });
    });
});