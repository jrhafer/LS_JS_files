// a 
// break num into ones, tens, hundreds, thousands, etc
// -- add above to array
// -- iterate over array: 
//    - convert each number to first single dig
//    - then convert to string at corresponding index
//      in array
//      - convert each element of array into a single digit
//        - idx 0 - 1   
//        - idx 1 - 10
//        - idx 2 - 100
//        - idx 3 - 1000  
// -- join result array 



const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function integerToString(num) {
	if (num === 0) {
		return '0';
	} 

	let nums = [];
	let div = 1;

  while (num >= div) {
  	div *= 10;
  	nums.push(num % div)
  	num = num - (num % div);
  }

  for (let i = 0; i < nums.length; i++) {
  	nums[i] = DIGITS[nums[i] / (10**i)]
  }

  return nums.reverse().join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"