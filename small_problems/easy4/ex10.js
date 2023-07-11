//p
//- same as last but with signed and unsigned string nums passed

//e

//d
//- input: string
//- output: number

//a
//- check first char of string
//-> if '-' then mult result by -1
//-> if not '-' or '+' return result
//-> if sign present, remove it before contining on 

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

function stringToSignedInteger(num) {
	let firstChar = num[0];

	if (firstChar === '-' || firstChar === '+') {
		num = num.slice(1);
	}

	let result = 0;
	let mult = 1;
	let nums = num.split('');

	for (let i = nums.length - 1; i >=0; i--) {
		result += NUMBERS[nums[i]] * mult;
		mult *= 10;
	}
	return firstChar === '-' ? result * -1 : result;
}



console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true




