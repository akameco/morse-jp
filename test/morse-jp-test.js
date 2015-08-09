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

        it("'こんにちわ'が'----*.-.-.*-.-.*..-.*-.-'になること", ()=> {
            let morse = '----*.-.-.*-.-.*..-.*-.-';
            assert(morseJp.word2morse(word, '*') === morse);
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
            assert(morseJp.morse2word(morse, '*') === word);
        });
    });
});