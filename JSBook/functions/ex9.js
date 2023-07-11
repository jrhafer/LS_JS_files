function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// line 1:
// multiply(global), left(local), right(local)

// line 2:
// product(local), left(local), right(local)

// line 3:
// product(local)

// line 6:
// getNumber(global), prompt(local)

// line 7:
// parseFloat(global), question(global), prompt(local)

// line 10:
// left(local), getNumber(global)

// line 11:
// right(global), getNumber(global)

// line 12:
// console(global), left(global), right(global), 
// multiply(global), left(global)






