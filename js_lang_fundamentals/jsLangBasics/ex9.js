const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function signedIntegerToString(num) {
	if (num === 0) {
		return '0';
	}

	let sign = '+';

	if (num < 0) {
		sign = '-' 
		num *= -1
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

  return `${sign}${nums.reverse().join('')}`;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"