let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // 7

// a is primitive, and therefore can not be mutated
// - only reassigned


