let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // outputs 1

// two variables named bar exist:
// - a global and local var
// the global variable is passed to console.log()

 