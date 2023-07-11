// String.fromCharCode(number)
 
// string.charCodeAt(index) 

// -> 65 to 90 uppercase
// -> 97 to 122 lowercase

// a 
// - declare result variable and initialize it to ''
// - for loop through string and determine if index 
//   is between 65 to 90 or 97 to 122
//   - if between 65 and 90, add value at charCode n + 32
//   - if between 97 and 122, add value at charCode n - 32
//   - else return result
// - return result

function swapCase(str) {
	let resultStr = '';

	for (let idx = 0; idx < str.length; idx++) {
		asciiNum = str.charCodeAt(idx);

		if (asciiNum >= 65 && asciiNum <= 90) {
			resultStr += String.fromCharCode(asciiNum + 32);
		} else if (asciiNum >= 97 && asciiNum <= 122) {
			resultStr += String.fromCharCode(asciiNum - 32);
		} else {
			resultStr += str[idx];
		}
	};

	return resultStr; 
}

console.log(swapCase('CamelCase') === "cAMELcASE")
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv")



