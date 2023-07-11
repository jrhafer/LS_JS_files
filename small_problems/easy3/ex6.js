// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${noun} ${adjective} ${adverb}? Thats hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`)
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle`.)