// p 
// given a number
// return the century 

// new century begins in hears that end in 01 

// e
// 1901 to 2000 is the 20th century 

// d
// input: number
// output: string
// - 'st' -> number ending in 1
// - 'nd' -> numbers ending in 2
// - 'rd' -> numbers ending in 3
// - 'th' - numbers ending in 0
//        - numbers that are teens (lst two numbers between 11 and 19)

// a 
// first find suffix

// then determine the century
// - if 100 or less, first centry 
// - divide by 100 otherwise to get a number
//   - 
// - convert to string form
// then add suffix to century in string form

function findSuffix(centNum) {
	let lastTwoDigits = centNum % 100;

	if (lastTwoDigits <= 20 && lastTwoDigits >= 4) {
		return 'th';
	} 

	let lastDigit = centNum % 10;

	switch (lastDigit) {
		case 1: 
			return 'st';
			break;
		case 2:
			return 'nd';
			break;
		case 3:
			return 'rd';
			break;
		default:
			return 'th';
	}

}

function century(year) {
	let centNum;
	if (year <= 100) {
		return '1st';
	}

	centNum = Math.ceil(year / 100);

	return String(centNum) + findSuffix(centNum);
}

console.log(century(2000) === "20th")
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) ==="11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");





