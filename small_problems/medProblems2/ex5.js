//p 
// featured number is:
// - odd
// - multiple of 7
// - all digits only occur once each
// find the next featured num or 
// issue an error message if none
// - largest poss featured num is 9876543201

//e

//d
//input: number
//output: number

//a
// given number, begin loop starting with n + 1
// - is mult of seven
// - is odd
// - all digits occur only once
// if above criteria met, return number

const MAX_FEATURED = 9876543201;

function multSeven(num) {
	return num % 7 === 0;
}

function isOdd(num) {
	return num % 2 === 1;
}

function noRepeatedDigits(num) {
	let otherList = [];
	let listOfNums = String(num).split('');

	listOfNums.forEach(n => {
		if (!otherList.includes(n)) {
			otherList.push(n);
		}
	});
	return otherList.length === listOfNums.length;
} 

function featured(num) {
	for (let n = (num + 1);; n++) {
		if (multSeven(n) && isOdd(n) && noRepeatedDigits(n)) {
			return n;
		} else if (n > MAX_FEATURED) {
			return "There is no possible number that fulfills" + 
			" those requirements."
		}
	};
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."





