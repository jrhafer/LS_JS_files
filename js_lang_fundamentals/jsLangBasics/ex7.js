//P
// given a string number, convert to a number without
// calling string methods:

//E

//D
//input: string
//output: number

//A
// iterate over each character from last string digit, 



function stringToInteger(strNum) {
	let nums = strNum.split('');
	let total = 0;
	let increment = 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		total += strNum[i] * increment;
		increment *= 10;
	}

	return total;
}

console.log(stringToInteger('4321'));      // 4321
stringToInteger('570');       // 570