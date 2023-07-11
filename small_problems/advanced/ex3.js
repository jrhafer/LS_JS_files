// Problem:
// Modify your transpose function from the previous exercise 
// so that it works with any MxN matrix with at least one row and one column.

//e
// [1, 5, 8, 5]    [1, 4, 3]
// [4, 7, 2, 0] => [5, 7, 9]
// [3, 9, 6, 1]    [8, 2, 6]
//                 [5, 0, 1]

//a
// matrix[0][0] => resultMatrix[0][0]
// matrix[0][1] => resultMatrix[1][0]
// matrix[0][2] => resultMatrix[2][0]
// matrix[0][3] => resultMatrix[3][0]

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function transpose(matrix) {
  let resultMatrix = []
  let count = 1;

  while(count <= matrix[0].length) {
    resultMatrix.push([]);
    count += 1
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let idx = 0; idx < resultMatrix.length; idx++) {
      resultMatrix[idx].push(matrix[i][idx]);
    }
  }

  return resultMatrix;
}


let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]