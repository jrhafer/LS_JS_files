let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let result = [];

for (key in person) {
  result.push([key, person[key]]);
}

console.log(result);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]