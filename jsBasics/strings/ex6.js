let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(!!byteSequence.match(/x/i) ); // upper and lower
console.log(byteSequence.includes('x'));