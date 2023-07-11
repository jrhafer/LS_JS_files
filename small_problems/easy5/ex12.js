function afterMidnight(time) {
	let minsAndHrs = time.split(':')
	.map(strNum => Number(strNum));

	let totalMinutes = minsAndHrs[0] * 60 + minsAndHrs[1];

	totalMinutes %= 1440;

	return totalMinutes;
}

function beforeMidnight(time) {
	let minsAndHrs = time.split(':')
	.map(strNum => Number(strNum));

	let totalMinutes = minsAndHrs[0] * 60 + minsAndHrs[1];

	totalMinutes = (1440 - totalMinutes) % 1440;
	
	return totalMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);