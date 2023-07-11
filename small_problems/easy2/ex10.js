// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let rlSync = require('readline-sync');

let age = rlSync.question('What is your age? ');
let retirementAge = rlSync.question('At what age would you like to retire? ');

let year = new Date().getFullYear();
let retirementYear = year + (retirementAge - age);

console.log('')
console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You have only ${retirementAge - age} years of work to go!`);

