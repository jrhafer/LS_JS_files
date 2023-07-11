function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// variables, object property names, primitive values, objects

// variables: 
// hello, greeting, name, xyzzy, howdy, foo

// object property names:
// 'a', 'b', 'c', 'd', (0, 1, 2) for the array value to key 'c'

// primitive values:
// ' ', a', 'b', 'c', 'd', 1, 2, 3, 4, 5, 'Hi', 'Grace'. 0, 1, 2

// objects: 
// { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3,4,5], {}