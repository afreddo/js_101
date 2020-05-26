//input:  inventory item & transactions
//output: return true or false based on whether or not an invetory item is 
//        available.
//rules:
//    - true only if the sume of the quantity values of the iterms transactions
//      is greater than zero
//    - movement in adds to total and out decreases total
//data struct: arrays
//alg:
//  Set itemTransaction = transactionsFor();
//  let quantity = 0;
//  loop while iterator < length of item transanctions
//    if movement property at current idx is 'in'
//      quantity += value of quantity
//    else 
//      quantity -= value of quantity
//  return quantity > 0

let transactionsFor = (inventoryItem, transactions) => {
  let results = [];
  
  transactions.forEach(ele => {
    if (ele.id === inventoryItem) {
      results.push(ele);
    }
  });
  return results;
};

let isItemAvailable = (inventoryItem, transactions) => {
  let itemTransaction = transactionsFor(inventoryItem, transactions);
  let quantity = 0;
  for (let i = 0; i < itemTransaction.length; i++) {
    if (itemTransaction[i].movement === 'in') {
      quantity += itemTransaction[i].quantity;
    } else {
      quantity -= itemTransaction[i].quantity;
    }
  }
  console.log(quantity);
  return quantity > 0;
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
