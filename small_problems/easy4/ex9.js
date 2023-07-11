//p
//- given string num, convert to integer
//- can't use ParseInt or Number() methods

//-e

//-d
//-input: string
//-output: number

//a
//- create an object with string numbers as keys and numbers as values
//- spilit string into chars
//- dec and init var called result to 1;
//- dec and init variabe called mult with value of 1
//- iterate over characters from last to first char
//- add the characters corresponding value from the object times mult to result
//- on each iteration, multiply mult by ten
//- return result

const NUMBERS = {
	0: 0,
	1: 1,
	2: 2, 
	3: 3, 
	4: 4, 
	5: 5, 
	6: 6, 
	7: 7, 
	8: 8, 
	9: 9, 
}

function stringToInteger(num) {
	let result = 0;
	let mult = 1;
	let nums = num.split('');

	for (let i = nums.length - 1; i >=0; i--) {
		result += NUMBERS[nums[i]] * mult;
		mult *= 10;
	}
	return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

// (4, 3, 2, 1)
// - 1st it: value = 10 * 0 + 4 = 4
// - 2nd it: value = 10 * 4 + 3 = 43
// - 3rd it: value = 10 * 43 + 2 = 432
// - 4th it: value = 10 * 432 + 1 = 4321

// returns 4321
