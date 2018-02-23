# morse-jp

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/morse-jp.svg)](https://greenkeeper.io/)

This is a tool that converts 'Text' and 'Morse cord' to each other.  
テキストとモールス信号のコードを相互に変換するツール.

[![Build Status][travis-image]][travis-url]
[![NPM package][npm-image]][npm-url]

## Installation

```
npm install morse-jp
```

## Example

```js
var MorseJp = require('../lib/morse-jp');
var morse = new MorseJp();

console.log(morse.word2morse('こんにちわ'));
// ---- .-.-. -.-. ..-. -.-

console.log(morse.morse2word('.-- --.--'));
// やあ

console.log(morse.morse2word('ああああ〜♥あ♥あ♥〜あ♥あ♥〜♥♥あ♥〜あ♥あ', {dash: 'あ', dot: '♥', separate: '〜'}));
// こんにちわ

console.log(morse.word2morse('おれがいる', {dash: 'それ', dot: 'ある', separate: '〜'}));
// あるそれあるあるある〜それそれそれ〜あるそれあるある〜あるある〜あるそれ〜それあるそれそれある
```

## Development

```
# watch
npm run watch
# build
npm run build
# test
npm test
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
MIT

[travis-image]: https://travis-ci.org/akameco/morse-jp.svg
[travis-url]: https://travis-ci.org/akameco/morse-jp
[npm-url]: https://www.npmjs.com/package/morse-jp
[npm-image]: https://badge.fury.io/js/morse-jp.svg
