function negOrPosZero(zero) {
	return (2 / zero === -Infinity && zero === 0) 
}

console.log(negOrPosZero(-0));
console.log(negOrPosZero(0));