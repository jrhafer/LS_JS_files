// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".

let rlSync = require('readline-sync');
let phrase = rlSync.question('Please enter a phrase: ');

console.log(`There are ${phrase.length} characters in ${phrase}`);
