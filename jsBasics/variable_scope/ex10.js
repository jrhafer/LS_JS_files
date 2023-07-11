const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// {firstName: 'Jane', lastName: 'Doe'};

// although a variable declared with const cannot be 
// re-assinged, it does not mean that the value within the 
// object they are assigned to can be mutated.

