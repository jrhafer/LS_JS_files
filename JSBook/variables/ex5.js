let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // 'bar'

// the variable delcared on line 3 is a local variable
// this variable shadows the global variable declared and 
// initialized on line 1

