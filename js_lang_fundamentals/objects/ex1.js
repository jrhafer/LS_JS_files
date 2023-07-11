const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; // js converts to a string
// myObject[a]; // raises error => must be 'a'
myObject.a;  