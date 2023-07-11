const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));

// returns 10 b/c although the values are all added, 
// they are divided by the length, which is 2
// - length propertuy only counts elements that require
//   a non negative integer as a property name

