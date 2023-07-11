// evenly divisible by 4
// - unless that hear is divisible by 100
// if evenly divisible by 100, not a leap 
// year unless also divisible by 400

function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) ||
	 (year % 100 === 0 && year % 400 === 0);
}


console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false); 
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);