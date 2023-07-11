let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(list, regex) {
  return list.filter(el => regex.test(el));
}

console.log(allMatches(words, /lab/)); 

// => ['laboratory', 'flab', 'elaborate']