function findFibonacciIndexByLength(sizeNum) {
	let nthNum = 3n
	let firstNum = 1n
	let secondNum = 1n
	let fib = firstNum + secondNum;


	while (String(fib).length < sizeNum) {
		firstNum = secondNum;
		secondNum = fib;
		fib = firstNum + secondNum;
		nthNum += 1n;
	}

	return nthNum;
} 


console.log(findFibonacciIndexByLength(2n));   // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));

// The last example may take a minute or so to run.