// arr = [1,2,3,4,5,6,7,8,9,10]

//a 
// establish:
// - first idx  (initially set to 0)
// - middle idx (Math.floor(arr.length / 2))
// - last idx   (initially set to arr.length - 1)



function binarySearch(list, item) {
	let first = 0;
	let last = list.length - 1;
	let middle = Math.floor(list.length / 2)

	while (last - first > 1) {
		if (list[middle] === item) {
			return middle;
		} else if (list[last] === item) {
			return last; 
		} else if (list[first] === item) {
			return first;
		} 

		if (item < list[middle]) {
			last = middle;
			middle = Math.floor((last - first) / 2 + first);
		} else if (item > list[middle]) {
			first = middle;
			middle = Math.floor((last - first) / 2  + first);
		} 
	}

	return -1;
}


const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria') === 7);
console.log(binarySearch(yellowPages, 'Apple Store') === 0);

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77) === -1);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89) === 7);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5) === 1);

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter') === -1);
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler') === 6);





