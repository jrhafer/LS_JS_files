function multiplicativeAverage(nums) {
	productOfNums = nums.reduce((acc, cur) => acc * cur, 1);
	return String((productOfNums / nums.length).toFixed(3));
}



console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"