
function repeat(num, str) {
	let result = '';

	for (let times = 1; times <= num; times++) {
		result += str;
	}

	return result;
}

console.log(repeat(3, 'ha')); // 'hahaha'