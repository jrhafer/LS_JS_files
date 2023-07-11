const VOWELS = ['a', 'e', 'i', 'o', 'u']

function removeVowels(strs) {
	return strs.map(str => {
		return str.split('').filter(letter => 
			!VOWELS.includes(letter.toLowerCase())).join('')
	});
}



console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]