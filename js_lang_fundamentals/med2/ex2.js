// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person.name === otherPerson.name);    // false -- expected: true