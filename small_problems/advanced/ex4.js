// 1  5  8    * origianl array 
// 4  7  2
// 3  9  6

// 3  4  1    * 90 degree turn right 
// 9  7  5
// 6  2  8

//-------------------------------------------

// * original non-square array
// 3  4  1        
// 9  7  5

// * 90 degree turn right
// 9  3             
// 7  4
// 5  1


// <-P-> 

// given an array of arrays, turn it to its R by 90 deg

// <-E->

// 3, 4, 1       9, 3
// 9, 7, 5   =>  7, 4
//               5, 1

// <-D->
// input: array of arrays 
// output: array of array 

// <-A->

// create a result array a of arrays:
// - based on number of elements in first array

// - iterate over each inner array of result array 
//   - on iteration for loop 0 - n of result Arr

// - then use for loop to list indexes of each inner 
//   arr of matrix 
//   - then for loop to list indexes of each element of 
//     each inner array 
//   - pushing the elements into the result arr index 
//     from each iteration 

// - return result array 



// matrix[1][0]  = push into first array of result
// matrix[0][0]    - first i = input array length - 1 => to > 0
//                 - second i = 0 to length of result array - 1

// matrix[1][1]  = push into second array of result 
// matrix[0][1]    

// matrix[1][2]  = push into third array of reslut 
// matrix[0][2]


// 3, 4, 1       9, 3  input[1][0] and input[0][0] => result[0]
// 9, 7, 5   =>  7, 4  input[1][1] and input[0][1] => result[1]
//               5, 1  input[1][2] and input[0][2] => result[2]

function rotate90(matrix) {
	let result = [];

	for (let num = 1; num <= matrix[0].length; num++) {
		result.push([]);
	};

	for (let resultArrIAndMatrixElI = 0; resultArrIAndMatrixElI < result.length; resultArrIAndMatrixElI++) {
		for (let matrixArrI = matrix.length - 1; matrixArrI > -1; matrixArrI--) {
			result[resultArrIAndMatrixElI].push(matrix[matrixArrI][resultArrIAndMatrixElI]);
		};
	};

	return result;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]





