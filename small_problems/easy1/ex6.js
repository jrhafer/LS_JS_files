// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

let rlSync = require('readline-sync');

let number = Number(rlSync.question('Please enter an integer greater than 0: '));

let sumOrProduct = rlSync.question('Enter "s" to \
compute the sum, or "p" to compute the product. ');

let numbers = [];

for (let i = 1; i <= number; i++) {
	numbers.push(i);
}

if (sumOrProduct === 'p') {
	let product = numbers.reduce((acc, cur) => acc * cur, 1);
	console.log(`The product of the \
integers between 1 and ${number} is ${product}.`);
} else {
	let sum = numbers.reduce((acc, cur) => acc + cur, 0);
	console.log(`The sum of the \
integers between 1 and ${number} is ${sum}.`);
}




