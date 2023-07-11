function halvsies(arr) {
	let result = [[], []];
	let size = arr.length
	let middleIdx = size % 2 === 0 ? 
	size / 2 - 1 : Math.floor(size / 2); 

	for (let idx = 0; idx < arr.length; idx++) {
		if (idx <= middleIdx) {
			result[0].push(arr[idx]);
		} else {
			result[1].push(arr[idx]);
		}
	}

	return result;
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]