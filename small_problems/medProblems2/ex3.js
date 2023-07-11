//p 
// determine if three angles passed as args constitute a 
// triangle (all sides = 180)
// - if they do, determine the classification of the triangle:
//   - right: one angle is right angle (90)
//   - acute: all three are < 90 degrees
//   - obtuse: one angle is > 90 degrees

//e 

//d
//input: x3 Numbers
//output: string

//a
// - convert angles into array and sort 
// - determine if valid triangle -> sum === 180
// - if valid:
//   - call filter on array with === 90 then, then if length 
//     equals one, return 'right'
//   - call filter - condition less than 90, then if lenght 3
//     - return 'acute'
//   - else -> obtuse

//c 

function isTriangle(angles) {
	return angles.reduce((acc, cur) => acc + cur, 0) === 180 
	&& angles.filter(angle => angle > 0).length === 3;	
}

function triangle(angle1, angle2, angle3) {
	let angles = Object.values(arguments);

	if (!isTriangle(angles)) {
		return 'invalid';
	} else if (angles.filter(angle => angle === 90).length === 1) {
		return 'right';
	} else if (angles.filter(angle => angle < 90).length === 3) {
		return 'acute';
	} else {
		return 'obtuse';
	}
}


console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");





