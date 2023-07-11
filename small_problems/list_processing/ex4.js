function leadingSubstrings(str) {
	let result = [];

	for (let lastIdx = str.length - 1; lastIdx >= 0; lastIdx--) {
		result.push(str.slice(0, str.length - lastIdx));
	}

	return result;
}



console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]