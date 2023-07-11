//p 
// given a number
// switch first char to last
// switch sec char to last
// ... until you reach the very last
// number is modified on each swap and modified number
// is used in next iteration

//e
// Start: 735291
// - 352917 -> idx 0 to last 
// - 329175 -> idx 1 to last
// - 321759 -> idx 2 to last
// - 321597 -> idx 3 to last 
// - 321579 -> idx 4 to last
// End: 321579

//d
// input: number
// output: number

//a
// - split number into string chars array called nums
// - iterate over array 
//   - within for loop have declare variable called working
//     array and ititilaize to [] (empty array)
// 	 - starting index is 0 and increment to nums.length - 1


//   - add all elements to 

function rotateRightmostDigits(num, nth) {
	let result = '';
  let nums = String(num).split('')

  for (let i = nums.length; i > 0; i--) {
  	if (i !== nth) {
  		result += nums[nums.length - i];
  	}
  };

  return Number(result + nums[nums.length - nth]);
}

function maxRotation(number) {
	for (let nth = String(number).length; nth > 0; nth--) {
		number = rotateRightmostDigits(number, nth);
	};

	return number;
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);


