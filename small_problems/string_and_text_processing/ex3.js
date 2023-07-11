// String.fromCharCode(number)
 
// string.charCodeAt(index) 

// -> 65 to 90 uppercase
// -> 97 to 122 lowercase

// 

function letterCaseCount(str) {
	let letterObj = {lowercase: 0, uppercase: 0, neither: 0}

	for (let idx = 0; idx < str.length; idx++) {
		let charNum = str.charCodeAt(idx)

		if ( charNum >= 65 && charNum <= 90) {
			letterObj.uppercase += 1;
		} else if (charNum >= 97 && charNum <= 122) {
			letterObj.lowercase += 1;
		} else {
			letterObj.neither += 1;
		}
	};

	return letterObj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }