const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;


function timeOfDay(minutes) {
	minutes = minutes % MINUTES_PER_DAY;

	let hours = Math.floor(minutes / MINUTES_PER_HOUR);
	let mins = Math.floor(minutes / MINUTES_PER_HOUR % 1 * MINUTES_PER_HOUR);

	if (minutes < 0) {
		hours = HOURS_PER_DAY + hours;
		mins = MINUTES_PER_HOUR + mins;
	}

	hours = String(hours).padStart(2, '0');
	mins = String(mins).padStart(2, '0');

	return `${hours}:${mins}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");