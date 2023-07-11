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
    });
  };

  return allSubstrings;
}

function palindromes(str) {
	let results = [];

	substrings(str).forEach(sub => {
		if (sub === sub.split('').reverse().join('') && sub.length > 1) {
			results.push(sub);
		};
	});

	return results;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]