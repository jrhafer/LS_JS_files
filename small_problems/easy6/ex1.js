function repeater(str) {
	let result = ''

	for (let idx = 0; idx < str.length; idx++) {
		result += str[idx].repeat(2);
	}

	return result;
}


console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('') === "");