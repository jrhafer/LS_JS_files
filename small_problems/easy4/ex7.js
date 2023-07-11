


function findLettersOnly(str) {
	let words = str.split(' ').map(word => {
		return word.split('')
		.filter(letter => 
			letter.toUpperCase() >= 'A' && 
			letter.toUpperCase() <= 'Z')
		.join('');
	});

	return words.join(' ');
}

function wordSizes (str) {
	str = findLettersOnly(str);

	let result = {};

	if (str.length < 1) {
		return result; 
	}

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



console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}