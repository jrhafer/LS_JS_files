// p
// given a floating point num that represents an 
// angle between 0 and 360:
// - return string containing that angle in:
//   - degrees, minutes, seconds
// - use degree symbol to represent degrees
// - use ' to represent minutes
// - use " to represent seconds
// - 60 seconds in a minute
// - 60 minutes in a degree 
// - degree maxes out at 360

// input: number(floating point)
// output: string

// a
// - get the degrees

// - get the minutes

// - get the secondes

function dms(num) {
	let degrees = String(Math.floor(num))
	.padStart(2, '0');
	let minutes = String(Math.floor(num % 1 * 60))
	.padStart(2, '0');
	let seconds = String(Math.floor(num % 1 * 60 % 1 * 60))
	.padStart(2, '0');
	let degSymbol = String.fromCharCode(176);


	console.log(`${degrees}${degSymbol}${minutes}'${seconds}"`);
}

dms(30)
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"