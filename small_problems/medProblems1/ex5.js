//p 
// given a string that contains the word representations of digits,
// return entire phrase with the word digits converted to actual digits

//e

//d 
// input: string
// output: string

//a
// create an object with string word numbers as keys and the numbers as values
// - edge case = 'four.' 
//   -> create function that takes a string and returns just letters:
//      -> 'four.' = 'four'
// - then concatenate with string literals in place of the number words
// - call map 
//   - if object[word] then obnect[word]
//   - else word
// join above array, then return. 

const NUMBERS = {
	zero: 0, one: 1, 
	two: 2, three: 3, 
	four: 4, five: 5, 
	six: 6, seven: 7, 
	eight: 8, nine: 9,
};

function numConverter(word) {
	let punctuation = !word[word.length - 1].match(/[a-z]/) 
		? word[word.length - 1] : '';

	if (punctuation && NUMBERS[word.slice(0, word.length - 1)]) {
		return NUMBERS[word.slice(0, word.length - 1)] + punctuation;
	} else if (NUMBERS[word]) {
		return String(NUMBERS[word]);
	} else {
		return word;
	}
}

function wordToDigit(text) {
	return text.split(' ').map(word => numConverter(word)).join(' ');
}




console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");