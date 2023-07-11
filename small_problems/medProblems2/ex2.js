// p
// given 3 numbers, if numbers, as sides of triangle, 
// make a valid triangle, return type of triangle

// e

// d
// triange: sum two lengths of shortest side must be 
// greater than length of longest side

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while 
//            the third is different.
// Scalene: All three sides are of different lengths.

// input: x3 numbers
// output: string

// a
// - call treat input as an array 


function triangle(a, b, c) {
	let sides = Object.values(arguments).sort();

	if ((sides[0] + sides[1]) <= sides[2]) {
		return 'invalid';
	} else {
		if (sides[0] === sides[1] 
			&& sides[1] === sides[2]) {
			return 'equilateral';
		} else if (sides[0] !== sides[1] 
			&& sides[1] !== sides[2] 
			&& sides[2] !== sides[0]) {
			return 'scalene';
		} else {
			return 'isosceles';
		}
	}
}

console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");


