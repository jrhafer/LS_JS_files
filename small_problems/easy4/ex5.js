// a 
// iterate over numbers starting with second and 
// call 

function runningTotal(nums) {
	let result = nums.length > 0 ? [nums[0]] : [];

	for (let i = 1; i < nums.length; i++) {
		result.push(result[i - 1] + nums[i]);
	}

	return result; 
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []