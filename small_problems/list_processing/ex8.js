function buyFruit(groceries) {
	let fruitList = [];

	groceries.forEach(fruit => {
		for (let times = fruit[1]; times > 0; times--) {
			fruitList.push(fruit[0]);
		};
	});

	return fruitList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]