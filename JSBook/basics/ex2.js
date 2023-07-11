let num = 4936

let ones = num % 10; 

num -= ones;

let tens = (num % 100) / 10;

num -= tens;

let hundreds = Math.floor((num % 1000) / 100);

num -= hundreds;

let thousands = Math.floor((num % 10000) / 1000);

console.log(ones);

console.log(tens);

console.log(hundreds);

console.log(thousands);
