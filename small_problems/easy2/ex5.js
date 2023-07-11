// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

let rlSync = require('readline-sync');

let firstNum = Number(rlSync.question('Enter the first number: '));

let secNum = Number(rlSync.question('Enter the second number: '));

console.log(`${firstNum} + ${secNum} = ${firstNum + secNum}`);
console.log(`${firstNum} - ${secNum} = ${firstNum - secNum}`)
console.log(`${firstNum} * ${secNum} = ${firstNum * secNum}`)
console.log(`${firstNum} / ${secNum} = ${firstNum / secNum}`)
console.log(`${firstNum} % ${secNum} = ${firstNum % secNum}`)
console.log(`${firstNum} ** ${secNum} = ${firstNum ** secNum}`)