
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


greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'