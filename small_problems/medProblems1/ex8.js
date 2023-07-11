//1 1 2 3 5 8 13 21 34 55 89 144 

function fibonacci(nth) {
	let firstNum = 1;
	let secondNum = 1;
	let fib = firstNum + secondNum;
	let count = 3;

	while (count < nth) {
		firstNum = secondNum;
		secondNum = fib;
		fib = firstNum + secondNum;
		count += 1;
	}

	return fib;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050