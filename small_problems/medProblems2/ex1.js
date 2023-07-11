

//p
// - given a string, return an object with keys representing:
//   - lowercase -> number of each / string length
//   - uppercase -> number of each / string length 
//   - neither   -> number of each / string length 

//e

//d
// input: 
// output: 

//a
// iterate over string by index
// - if character is uppercase letter, add value to obj[uppercase]
// - '             ' lowercase '                                  '
// - '             ' neither.  '                                  '
// - change all values in object to current value / string.length 
// - return object
 
function letterPercentages(text) {
  let result = {lowercase: 0, uppercase: 0, neither: 0};

  for (let idx = 0; idx < text.length; idx ++) {
    let char = text[idx];

    if (char.match(/[a-z]/)) {
    	result.lowercase += 1;
    } else if (char.match(/[A-Z]/)) {
    	result.uppercase += 1;
    } else {
    	result.neither += 1;
    }
  }

  Object.keys(result).forEach(key => {
  	result[key] = parseFloat(result[key] / text.length * 100).toFixed(2)
  });

  return result;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }