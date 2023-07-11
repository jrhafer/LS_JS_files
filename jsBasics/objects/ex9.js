let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let person = {};

for (subArr of nestedArray) {
	person[subArr[0]] = subArr[1]; 
}

console.log(person);