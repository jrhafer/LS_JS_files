
function staggeredCase(str) {
	let result = ''

	for (let idx = 0; idx < str.length; idx++) {
		if (idx % 2 === 0) {
			result += str[idx].toUpperCase();
		} else {
			result += str[idx].toLowerCase();
		}
	};

	return result;
}


console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");