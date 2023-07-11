let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you? '));

console.log(`You are ${age} years old.`);

for (let yrs = 10; yrs < 50; yrs += 10) {
	console.log(`In ${yrs} you will be ${yrs + age} old.`)
}

