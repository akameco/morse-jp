"use strict";

import support from 'source-map-support'
support.install();

import assert from 'power-assert'
import MorseJp from "../src/morse-jp";

describe("morse-jp-test", ()=> {
    describe("#word2morse", ()=> {
        it("'こんにちわ'が'---- .-.-. -.-. ..-. -.-'になること", ()=> {
            let morseJp = new MorseJp();
            let word = 'こんにちわ';
            let morse = '---- .-.-. -.-. ..-. -.-';
            assert(morseJp.word2morse(word) === morse);
        })
    });

    describe("#morse2word", ()=> {
        it("'---- .-.-. -.-. ..-. -.-'が'こんにちわ'になること", ()=> {
            let morseJp = new MorseJp();
            let word = 'こんにちわ';
            let morse = '---- .-.-. -.-. ..-. -.-';
            assert(morseJp.morse2word(morse) === word);
        })

        it("'----*.-.-.*-.-.*..-.*-.-'が'こんにちわ'になること", ()=> {
            let morseJp = new MorseJp();
            let word = 'こんにちわ';
            let morse = '----*.-.-.*-.-.*..-.*-.-';
            let separate = '*';
            assert(morseJp.morse2word(morse, separate) === word);
        })
    });
});