// p
// - given a string of words,retrun an object with 
//   a key-value pairs that are number length words 
//   and the amount of them 

// e

// d
// input: string
// output: object

// a
// call map on split string and return array of numbers
// based on number of letters in words

// create empty object called result

// iterate over array of numbers and 
// - if the number doesn't already exist as a key in the result
//   array, add it with a value of 1
// - if the number already exists, add 1 to its value
// return result

function wordSizes (str) {
	let result = {};

	let wordLengths = str.split(' ').map(word => word.length);

	wordLengths.forEach(el => {
		if (result[el]) {
			result[el] += 1;
		} else {
			result[el] = 1;
		}
	});

	return result; 
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}




