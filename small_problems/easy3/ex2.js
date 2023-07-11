
function topAndBottom(str) {
	let lines = '';

	for (let num = 1; num < str.length + 2.5; num++) {
		lines += '-';
	}

	console.log(`+${lines}+`);
}

function middles(str) {
	let spaces = '';

	for (let num = 1; num < str.length + 2.5; num++) {
		spaces += ' ';
	}

	console.log(`|${spaces}|`);
}

function center(str) {
	console.log(`| ${str} |`)
}

function logInBox(str) {
	topAndBottom(str);
	middles(str);
	center(str);
	middles(str);
	topAndBottom(str);
}

logInBox('');

// +--+
// |  |
// |  |
// |  |
// +--+

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+


