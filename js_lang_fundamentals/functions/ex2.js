var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// variable shadowing 
// - variable within function has same name as
//   variable declared within the local scope, giving 
//   it priority over the variable with global scope
//   outside of the function 

