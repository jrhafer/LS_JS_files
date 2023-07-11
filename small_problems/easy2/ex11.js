// p
// return single middle character of a string if the string 
// is of odd length, otherwise return two middle characters 
// if it is of even length

// e

// d
// input: string
// output: string

// a
// determine if length is odd or even
// divide length by two 
// - if even return that number and number - 1 indexes 
//   combined
// - if odd return Math.floor(str.length) as the index

// c

function centerOf(str) {
	let middle = str.length / 2;

	if (str.length % 2 === 1) {
		return str[Math.floor(middle)];
	} else {
		return str.slice(middle - 1, middle + 1);
	}
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"