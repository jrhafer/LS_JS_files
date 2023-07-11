//p
// given an array of three array with 3 numbers each, 
// return the first number of each array in an seperate
// array, the second numbers from each array in another
// array, and the 3rd numbers from each array in another 
// array 
// - all three of the above arrays should be in an outer 
//   array 

//e

  // [1, 5, 8],        [1, 4, 3], 
  // [4, 7, 2],   ==>  [5, 7, 9],
  // [3, 9, 6]         [8, 2, 6]

//d
// input: array of three arrays, each containg 3 numbers
// output: array of three arrays, each containg 3 numbers

//a
// - declare a variable called result and initialize it to 
//   an array of three empty arrays
// - iterate over the input array 
//   - [0][0], [1][0], [2][0] => to result[0]
//   - [0][1], [1][1], [2][1] => to result[1]
//   - [0][2], [1][2], [2][2] => to reuslt[2]
// - iterate over each array in matrix per index

//c 

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let resultArr = [[],[],[]];

  for (let outerI = 0; outerI < matrix.length; outerI++) {
    for (let innerI = 0; innerI < matrix.length; innerI++) {
      resultArr[innerI].push(matrix[outerI][innerI]);
    }
  }

  return resultArr;
}


let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]