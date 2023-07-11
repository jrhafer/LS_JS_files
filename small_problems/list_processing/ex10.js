function transactionsFor(id, transactions) {
  let result = [];

  transactions.forEach(transaction =>{ 
    if (transaction.id === id) {
      result.push(transaction);
    }
  });

  return result;
}


function isItemAvailable(id, transactions) {
  let totalIn = 0;
  let totalOut = 0;

  transactions = transactionsFor(id, transactions)

  transactions.forEach(transaction => {
    if (transaction.movement === 'in') {
      totalIn += transaction.quantity;
    } else 
      totalOut += transaction.quantity;
  })

  return 0 < (totalIn - totalOut);
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


