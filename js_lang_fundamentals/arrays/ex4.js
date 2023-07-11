function concat(...args) {
	let result = [];

	args.forEach(el => {
		if (Array.isArray(el)) {
		 	el.forEach(el => result.push(el));
		} else {
			result.push(el);
		}
	});

	return result;
}



console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]