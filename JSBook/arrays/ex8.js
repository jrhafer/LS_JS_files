let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
	return arr.reduce((filteredArray, cur) => {
		if (cur.length % 2 === 1) {
			filteredArray.push(cur.length)
		}

		return filteredArray;
	}, [])
}

console.log(oddLengths(arr)); // => [1, 5, 3]