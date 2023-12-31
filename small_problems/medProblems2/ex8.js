//p - given text, return longest sentence

//e - see below

//d 
// input: string
// output: x2 strings

//a
// - split the entire text into single words.
// - declare a var named sentences and initailize to the an empty array
// - declare a var named sentence and initialize to an empty array
// - iterate over text and add each word to the sentence array until 
//   one of the words has either '.', '!' or '?' at the end
//   - then add the array sentence to the array sentences 
//   - then reassign the value of sentence back to an empty array 
// - repeat process of adding words to sentence array until last char of word is 
//   end-of-sentence punctuation 
// - when done, sentences will be an array of arrays
//   - iterate over then and determine the larges array 
//   - return it joined and


function longestSentence(text) {
  let sentences = [];
  let sentence = [];

  let words = text.split(' ');

  for (let idx = 0; idx < words.length; idx++) {
    sentence.push(words[idx])
    lastChar = words[idx][words[idx].length - 1]
    if (['.', '?', '!'].includes(lastChar)) {
      sentences.push(sentence);
      sentence = [];
    }
  };

  let numberOfWords = sentences.sort((a, b) => b.length - a.length)[0].length;

  let longestSentence = sentences.sort((a, b) => b.length - a.length)[0].join(' ');

  console.log(longestSentence);
  console.log(numberOfWords);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.