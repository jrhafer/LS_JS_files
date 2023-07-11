
function union(arr1, arr2) {
	let resultArr = [];

	arr1.forEach(el => {
		if (!resultArr.includes(el)) {
			resultArr.push(el);
		}
	});

	arr2.forEach(el => {
		if (!resultArr.includes(el)) {
			resultArr.push(el);
		}
	});

	return resultArr;
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]