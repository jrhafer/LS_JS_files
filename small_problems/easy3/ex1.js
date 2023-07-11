function crunch(str) {
	let result = '';

  str.split('').forEach(el => {
  	if (result[result.length - 1] !== el) {
  		result += el;
  	}
  });	

	return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""