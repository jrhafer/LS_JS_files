// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

function getNum(prompt) {
	let rlSync = require('readline-sync');
	let num = rlSync.question(prompt);
	return Number(num);
}

function multiply() {
	let firstNum = getNum('Enter the first number: ');
	let secondNum = getNum('Enter the second number: ');
	let product = firstNum * secondNum;

	console.log(`${firstNum} * ${secondNum} = ${product}`);
}

multiply();