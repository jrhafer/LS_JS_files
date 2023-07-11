let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(arr) {
	return arr
	.map(arr => arr.length)
	.filter(num => num % 2 === 1);
}

console.log(oddLengths(arr)); // => [1, 5, 3]