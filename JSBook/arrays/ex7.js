let array = [3, 5, 7];

function sumOfSquares(arr) {
	return arr
	.reduce((acc, cur) => acc + (cur * cur), 0);
}

console.log(sumOfSquares(array)); // => 83