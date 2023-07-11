
//p
// replicate slice method
// - values begin and end will always be integers greater than
//   of equal to 0
// - if value of begin or end is greater than the length of 
//   the array, set it equal to the length

// function slice(array, begin, end) {
//   let result = [];

//   if (end > array.length) {
//     end = array.length;
//   }

//   for (let i = begin; i < end; i++) {
//     result.push(array[i]);
//   };

//   return result;
// }

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

//p
// splice method:
// - changes the elements of an array 
//   - delete existing elements
//   - add new elements
// - takes an array, a start index, delete count, and
//   0 or more elements to be added
// - function removes deleteCount number of elements from 
//   the array beginning at start index
// - if optional element args provided, splice inserts them
//   into the array beginning at the start index
// - returns a new array containing deleted elements 
// - returns an empty array if no elements are deleted
// - mutates original array 

// - values start and deletecount will always be integers > 0
// - if value of start is greater than length of the array, 
//   set it to equal to the length
// - if value of deletecount is > number of elements from start
//   to the end of the array, set deleteCount to the difference 
//   between the array's length and start
// - takes optional arguments for elements to add to the array
//   - ...args
//   - if no elements to add are provided, only remove elements 
//     from the array

// * if a 0 is passed as deleteCount, return an empty array 
// * if delete count is greater than array length - 1, then make it length - 1
// * if items deleted, return them when function invoked
// * if no items deleted, return empty array when function invoked


 
//a
// - declare a variable named result and initialize to an empty array

// - determine if optional args elements have been passed      
//       
//   - if they have been passed:
//     - delete elements at start index until count and add to result, and swap with args in array
//       * create an empty array called returnResult
//       * create a copy of passed array called copyArray
//       * turn array passed to empty array

//       ** iterate over working array starting with index 0 and incrementing up to end of array:
//          *-> create our result array by iterating over indexes from start to end inclusive and 
//              add them to result
//          *-> change our argument array by iterateing over entire working array until index start,
//              then add all elements from args, then begin iterating from end + 1 and add the rest of 
//              the elements from the working array to the array argument
//          <-- return result -->

//   - if they have not been passed: 
//     - delete all elements between start and end indexes within the return array
//       ** iterate over working array starting with index 0:
//          - if < than start or > than end, add to array, else if >= to start and <= end, add to result
//         



function splice(array, start, deleteCount, ...args) {
  let returnResult = [];

  if (deleteCount === 0 && args.length === 0) {
    return returnResult; 
  } 

  let workingArray = array.slice();
  
  array.length = 0;

  let end = deleteCount - 1 + start;

  if (end >= workingArray.length) {
    end = workingArray.length - 1;
  }

  if (args.length === 0) {
    for (let i = 0; i < workingArray.length; i++) {
      if (i < start || i > end) {
        array.push(workingArray[i]);
      }
    };
  } else {
    for (let i = 0; i < start; i++) {
      array.push(workingArray[i]);
    };

    args.forEach(el => array.push(el));

    for (let i = end + 1; i < workingArray.length; i++) {
      array.push(workingArray[i]);
    };

  }

  for (let i = start; i <= end; i++) {
    returnResult.push(workingArray[i]);
  };

  return returnResult;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]  
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
























