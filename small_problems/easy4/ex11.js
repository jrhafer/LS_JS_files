//p

//e

//d

//a 
// loop starting with 10 and add remainder to a result array
// iterate over array starting at end of array, dividing by 
// 1, 10, 100, 1000, 1000.....


function integerToString(num) {
	let numbers = [];
	let div = 1;

	for (let div = 10;;div *= 10) {
		numbers.push(num % div);
		if (div > num) {
			break;
		}
	}

	for (let idx = 0; idx < numbers.length; idx++) {
		numbers[idx] = Math.floor(numbers[idx] / div);
		div *= 10;
	}

	return numbers.reverse()
	.map(num => String.fromCharCode(num + 48)).join('');
}



console.log(integerToString(4321) === "4321");
console.log(integerToString(0) === "0");
console.log(integerToString(5000) === "5000");
console.log(integerToString(1234567890) === "1234567890");



