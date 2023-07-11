function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;      
    console.log(a);
  }
}

myFunction();

// 1
// ReferenceError: Cannot access 'a' before initialization
 
// the variable defined on line 6 shadows the varible
// delcared on line 2
// - when attempting to log the variable a on line 5, 
//   an error is thrown because the variable is hoisted 
//   but has no value - 'temporal dead zone'