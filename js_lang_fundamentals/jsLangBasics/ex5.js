let rlSync = require('readline-sync');
let firstNum = Number(rlSync.question('Enter the first number: '));
let secondNum = Number(rlSync.question('Enter the second number: '));

console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);

