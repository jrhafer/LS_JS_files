function evenOrOdd(num) {
	if (!Number.isInteger(num)) {
		console.log('Error: must enter a number!')
		return 
	} else {
		console.log((num % 2) === 1 ? 'odd' : 'even');
	}
}

evenOrOdd('hello');
evenOrOdd(10);
 
