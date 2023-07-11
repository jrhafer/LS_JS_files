let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upCaseKeys = Object.keys(obj).map(key => key.toUpperCase());

console.log(upCaseKeys);