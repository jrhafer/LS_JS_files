//p 
// given a number and an nth place, return an 
// array with nth element in last place of return 
// array 

//e 

//d
//input: number, number
//ouput: number

//a
//split number into single digits
//iterate with starting with last element:
// - 6 -> arr.length - 6
// - 5 -> arr.length - 5
// - 4 -> arr.length - 4



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


console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
