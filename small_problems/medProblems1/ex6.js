// 1 1 2 3 5 8 13 21 34 

function findFibonacciIndexByLength(num) {
	if (num === 1n) {
		return 1n;
	}

	let firstNum = 5n;
	let secondNum = 8n;
	let fibNum = 13n;
	let count = 7n;

	while (String(fibNum).length < num) {
		firstNum = secondNum;
		secondNum = fibNum;
		fibNum = firstNum + secondNum;
		count += 1n;
	}

	return count;

}


console.log(findFibonacciIndexByLength(3n)) // === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)) // === 45n;
console.log(findFibonacciIndexByLength(16n)) // === 74n;
console.log(findFibonacciIndexByLength(100n)) // === 476n;
console.log(findFibonacciIndexByLength(1000n)) // === 4782n;
console.log(findFibonacciIndexByLength(10000n)) // === 47847n;

// The last example may take a minute or so to run.