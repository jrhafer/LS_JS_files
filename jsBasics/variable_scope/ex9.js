const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// Error:
// you cannot reassign a variable that is declared with 
// a constant

// the argument passed to the myFunction is ignored
// by the function body

