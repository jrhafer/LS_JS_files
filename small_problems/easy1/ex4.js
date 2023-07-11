let rlSync = require("readline-sync");


let length = parseInt(rlSync.question('Enter the length of the room in meters:\n'), 10);
let width = parseInt(rlSync.question('Enter the width of the room in meters:\n'), 10);

const SQMETERS_to_SQFEET = 10.7639

let areaInMeters = (length * width).toFixed(2);
let areaInFeet = (areaInMeters * SQMETERS_to_SQFEET).toFixed(2);

console.log(`The area of the room is ${areaInMeters} meters (${areaInFeet} square feet).`);



