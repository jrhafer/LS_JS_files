// bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(height, weight) {
	height = parseFloat(height / 100); 

	return (weight / (height * height)).toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"