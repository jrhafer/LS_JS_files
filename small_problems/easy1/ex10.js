function multisum(n) {
	let numbers = [];

	for (let num = 1; num <= n; num++) {
		if (num % 3 === 0 || num % 5 === 0) {
			numbers.push(num);
		} 
	}
	return numbers.reduce((acc, cur) => acc + cur, 0);
}


console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);