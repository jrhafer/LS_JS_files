function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

function greet(code) {
  switch (code) {
    case 'en': 
      console.log('Hi!');
      break;
    case 'fr': 
      console.log('Salut!');
      break;
    case 'pt': 
      console.log('Ola!');
      break;
    case 'de': 
      console.log('Hallo!');
      break;
    case 'sv': 
      console.log('Hej!');
      break;
    case 'af': 
      console.log('Haai!');
  };
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}