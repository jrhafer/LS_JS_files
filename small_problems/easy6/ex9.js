//p

//a 
// - create copy of array and empty input array 
// - iterate over copy of array starting from last 
//   and push elements to original empty array 
// - return original array 

//c

function reverse(arr) {
	let arrCopy = arr.slice();
	arr.length = 0;

	for (let idx = arrCopy.length -1; idx >= 0; idx--) {
		arr.push(arrCopy[idx]);
	}

	return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true