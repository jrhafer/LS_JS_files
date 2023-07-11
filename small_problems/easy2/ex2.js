// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

let rlSync = require('readline-sync');

let name = rlSync.question('What is you name? ');

if (name[name.length - 1] === '!') {
	console.log(`HELLO ${name.toUpperCase().slice(0, name.length - 1)}.\
 WHY ARE WE SCREAMING?`);
} else {
	console.log(`Hello ${name}.`)
}