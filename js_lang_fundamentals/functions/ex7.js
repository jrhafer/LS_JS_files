let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // 7

// when a function is called that takes an argument, 
// - a local variable named the parameter is created
// - the value assinged is the argument passed to the function

// in the above case, there are two variables called a:
// - one with global scope 
// - one with local scope
// *** local variable a shadows global variable a *** 

