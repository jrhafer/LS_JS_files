//p 
// given a list of numbers from 0 - 19, sort in order of names 
// of numbers alphabetically 

//e 

//d
//input: array
//output: array

//a 
// - create array with names in order of numbers 0 - 19
// sort numberNames

const NUMBER_NAMES = [  
   'zero',     'one',
  'two',      'three',
  'four',     'five',
  'six',      'seven',
  'eight',    'nine',
  'ten',      'eleven',
  'twelve',   'thirteen',
  'fourteen', 'fifteen',
  'sixteen',  'seventeen',
  'eighteen', 'nineteen'
  ];

function alphabeticNumberSort(nums) {

  function compareNumbers(a, b) {
    if (NUMBER_NAMES[a] < NUMBER_NAMES[b]) {
      return -1;
    }
  }

  return nums.sort(compareNumbers);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]




