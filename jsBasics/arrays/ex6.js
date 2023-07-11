let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(subArr => {
  subArr.forEach(word => console.log(word));
});

// Expected output:
// happy
// cheerful
// merry
// etc...