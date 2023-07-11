//p 
// given a number, add all num from 1 to that num 
// inclusive then square result to get square of sum

// add all num from 1 to that num incluse after 
// each is squared to get sum of squares

//e

//d
//input: number
//output: number

//a
// - find all nums needed and store in array 
// - add all nums in array then square for square of sums
// - add all sqaured nums in array and then find sum of squares
//   for sum of squares
// - subtract the two for the result rtrn 

//c

function squareOfSums(nums) {
	return nums.reduce((acc, cur) => acc + cur, 0)**2;
}

function sumOfSquares(nums) {
	return nums.map(n => n**2)
	.reduce((acc, cur) => acc + cur, 0);
}
 
function sumSquareDifference(num) {
	let nums = [];

	for (let n = 1; n <= num; n++) {
		nums.push(n);
	};

	return squareOfSums(nums) - sumOfSquares(nums);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640 --> (1 to 10)**2 - (1** to 10**)
console.log(sumSquareDifference(1));      // 0  
console.log(sumSquareDifference(100));    // 25164150


