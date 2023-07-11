function interleave(arr1, arr2) {
	let resultArr = [];
	let idx = 0;

	arr1.forEach(el => {
		resultArr.push(el)
		resultArr.push(arr2[idx])
		idx += 1
	});

	return resultArr; 
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]