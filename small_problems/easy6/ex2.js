// p
// given a string, return a new string that contains 
// each consonant in the string doubled and every other
// character once

// e

// d
// input: string
// output: string

// a 
// dec a variable called result and initialize to an empty string
// given a string iterate over it and if the the element
// is a consonant add it to the result string variable x2
// - create an array containing all the acsii codes for all 
//   consonants
// - when iterating over each element, if it's char code in 
//   included in the array of consonant codes, then add it x2
//   to the result
// - otherwise, just add once
// - return result;

// c

function doubleConsonants(str) {
	const CONSONANT_CODES = [
		98, 99, 100, 102, 103, 104, 106, 107,
		108, 109, 110, 112, 113, 114, 115, 116, 
	  118, 119, 120, 121, 122,
		];

	let lowerCaseStr = str.toLowerCase();

	let result = '';

	for (let idx = 0; idx < str.length; idx++) {
		let curCharCode = lowerCaseStr.charCodeAt(idx);
		if (CONSONANT_CODES.includes(curCharCode)) {
			result += str[idx];
			result += str[idx];
		} else {
			result += str[idx];
		}
	};

	return result;
}



console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");






