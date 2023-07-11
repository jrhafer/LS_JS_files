// p 
// given a string of words 
// return the string of words with the first and last 
// letter of each word swapped 

// e

// d
// input: string
// output: string

// a
// split the string into an array of words
// iterate with map over words, returning 
// each word with swapped letters -> first for last
// then join and return 

// c

function swap(text) {
	if (text.length <= 1) {
		return text;
	}

	let words = text.split(' ');

	words = words.map(word => 
		word[word.length - 1] + word.slice(1, word.length - 1) + word[0]
		);

	return words.join(' ');
}

 

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"