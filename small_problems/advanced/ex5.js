function merge(arr1, arr2) {
	let result = [arr1, arr2].flat();
	let swapped;

	while (swapped !== false) {
		for (let i = 0; i < result.length - 1; i++) {
			let el1 = result[i]; 
			let el2 = result[i +1];
			swapped = false;

			if (el1 > el2) {
				result[i] = el2; 
				result[i + 1] = el1;
				swapped = true;
			}
		};
	}
	
	return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
