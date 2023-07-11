// p
// write a function that determines the mean avg
// and returns a grade:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'


function getGrade(score1, score2, score3) {
	let grade = (score1 + score2 + score3) / 3;

	if (grade < 60) {
		return 'F';
	} else if (grade < 70) {
		return 'D';
	} else if (grade < 80) {
		return 'C';
	} else if (grade < 90) {
		return 'B';
	} else {
		return 'A';
	}
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"