
function leadingSubstrings(str) {
  let result = [];

  for (let lastIdx = str.length - 1; lastIdx >= 0; lastIdx--) {
    result.push(str.slice(0, str.length - lastIdx));
  };

  return result;
}

function substrings(str) {
  let allSubstrings = [];

  for (let idx = 0; idx < str.length; idx++) {
    leadingSubstrings(str.slice(idx, str.length)).forEach(sub => {
      allSubstrings.push(sub);
    })
  };

  return allSubstrings;
}


console.log(substrings('abcde'));
console.log(substrings('abcdefghij'));


// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]