// p
// - double number: 
//   - even length
//   - left-side digits equal to right-sided digits
// - if number is a double number, return number
// - otherwise, return number * 2

// e
// - 44 === true
// - 3333 === true
// - 103103 === true
// - 444 === false
// - 334433 === false

//d 
// input: number
// output: number

// a
// - determine length of number
// - if odd length return number * 2
// - otherwise split from first char to middle or length / 2
// - compare the two split numbers
// - if double, return number
// - if not double, return number * 2

function twice(number) {
	let workingNum = String(number);
	let size = workingNum.length;
	let middle = workingNum.length / 2;

	let firstHalf = workingNum.slice(0, middle);
	let secondHalf = workingNum.slice(middle, workingNum.length);

	if (firstHalf === secondHalf) {
		return number;
	} else {
		return number * 2;
	}
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log((twice(3333)));        // 3333
console.log(twice(7676));        // 7676


