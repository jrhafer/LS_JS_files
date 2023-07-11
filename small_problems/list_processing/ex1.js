function sum(num) {
	let nums = String(num).split('')
	.map(strNum => Number(strNum));

	return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45