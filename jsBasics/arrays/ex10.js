let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let result = '';

for (let i = 0; i < passcode.length; i++) {
	result += passcode[i] 
	if (i !== passcode.length - 1) {
		result += '-';
	}
}

console.log(result);

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'