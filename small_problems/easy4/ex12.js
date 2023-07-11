// input: number (number may be signed)
// output: string

// declare a variable called negative
// if math sign returns -1, mult num by -1
// make negative = true

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

function signedIntegerToString(num) {
	let negative = false;

	if (Math.sign(num) === -1) {
		negative = true;
		num = num * -1;
	} 

	if (negative === true) {
		return '-' + integerToString(num);
	} else if (num === 0) {
		return integerToString(num);
	} else {
		return '+' + integerToString(num);
	}
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");






