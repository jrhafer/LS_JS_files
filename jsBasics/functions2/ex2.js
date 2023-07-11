function greet(greeting="Hello", greeted="world") {
	console.log(greeting + "," + " " + greeted + '!');
}


greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!