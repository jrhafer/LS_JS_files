// p
// given a string, 
// all non alphanumeric chars to be replaced by spaces
// if one or more non-alphanumeric chars occur in a row, 
// you should only have one space - never more than one space
// in a row

// e 

// d
// input: string
// output: string

// a 
// create a result string - empty
// iterate over passed string from 0 to last idx
// determinine if it is a letter
// - if so add to result
// - if not and the last char in result isn't a space,
//   add space
// return result

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}