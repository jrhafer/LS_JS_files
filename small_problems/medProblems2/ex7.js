//p 
// bubble sort
// iterate over array and determine if current
// element is greater than or less than next element
// - if current is greater than next, swap them 
// continue to iterate over value and make swaps 
// appropriately 
// when iteration is made and no swaps occur, return array

//e

//input: array
//output: array 

//a
// loop over array elements 
// swap current with next if next < current 
// 

function bubbleSort(list) {
  let completed; 

  while (completed !== true) {
    completed = true;
    
    for (let i = 0; i < list.length - 1; i++) {
      let el1 = list[i];
      let el2 = list[i + 1];

      if (el1 > el2) {
        list[i] = el2;
        list[i + 1] = el1;
        completed = false;
      } 
    };
  }

  return list;
}


const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]