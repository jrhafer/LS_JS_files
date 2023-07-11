let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// false

// the code on line 8 logs false because it is logging the 
// varaible defined on line 2, not the variable defined on line 
// 5. There are two variables named b. One has local scope and 
// one has global scope.

