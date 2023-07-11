function doSomething(string) {
  return string.split(' ')
  .reverse()
  .map((value) => value.length);
}

// splits a string into an array of characters
// reverses those words
// returns a new array of numbers representing the length 
// of each word

