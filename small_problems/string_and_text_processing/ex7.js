//p 
// return string where every other letter is capped


//e

//d 
// input: string
// output: string

//a 
// - create functoin called isLetter that returns a boolean
//   - return true if ascii code falls within range of letters upcased or down
// - declare a variable called result and initialize to an empty string
// - delcare a variable called upCase and initialize to boolean true

// - iterate over over string by index 
//   - if character at index returns true when passed to the isLetter function, 
//     and upCase = true:
//     - upcase letter and concatenate with result
//     - make upcase = false
// - or else, if charater at index return true when passed the to isLetter function 
//   and upCase = false:
//   - add upcased letter to result 
//   - set value of upCase to true
// - else pass non letter char to the result



function isLetter(char) {
	let letterCode = char.toUpperCase().charCodeAt(0);

	return (letterCode >= 65 && letterCode <= 90);
}

function staggeredCase(str) {
	let result = '';
	let convertToUpCase = true;

	for (let idx = 0; idx < str.length; idx++) {
		let char = str[idx];
		
		if (isLetter(char) && convertToUpCase === true) {
			result += char.toUpperCase();
			convertToUpCase = false;
		} else if (isLetter(char) && convertToUpCase == false) {
			result += char.toLowerCase();
			convertToUpCase = true;
		} else {
			result += char;
		}
	}

	return result; 
}


console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");




