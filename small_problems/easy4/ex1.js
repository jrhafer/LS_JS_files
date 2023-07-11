// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

let orders = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
let numbers = [];

let rlSync = require('readline-sync');

orders.forEach(order => 
	numbers.push(rlSync.question(`Enter the ${order} number: `))
);

let lastDig = numbers[numbers.length - 1];

for (let idx = 0; idx < numbers.length - 2; idx++) {
	if (numbers[idx] === lastDig) {
		console.log(`The number ${lastDig} appears in ${numbers.slice(0, numbers.length - 1).join()}.`);
		break;
	} else {
		console.log(`The number ${lastDig} does not appear in ${numbers.slice(0, numbers.length - 1).join()}.`);
		break;
	}
}