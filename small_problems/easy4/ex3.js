
function isRealPalindrome(str) {
	let newStr = '';

	for (let idx = 0; idx < str.length; idx++) {
		char = str[idx].toLowerCase();
		if (char >= 'a' && char <= 'z') {
			newStr += char;
		}
	}

	return isPalindrome(newStr); 
}

function isPalindrome(str) {
	return str === str.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false