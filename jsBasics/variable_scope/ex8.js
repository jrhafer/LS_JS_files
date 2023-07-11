let a = 1;    // global scope variable

function myFunction(a) {  // local scope variable/ parameter
  console.log(a);         
}

let b = 2;

myFunction(b);

// 2

// the variables declared on lines 1 and 3 have the same
// name but are distinctly different with different scopes
// - line 1 variable a has global scope 
// - line 2 variable a has local scope, and shadows the 
//   the global variable

// the variable declared on line 7 has global scope 
// - it is passed to the function, and the function parameter
//   a is initialized to the value of b. 
