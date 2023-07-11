function sequence(times, num) {
	let result = [];
	let elNum = num;

	for (let count = 1; count <= times; count++) {
		result.push(elNum);
		elNum += num;
	}

	return result; 
}


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []