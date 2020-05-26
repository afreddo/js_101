//input:  inventory item (number) & transactions (array of objects)
//output: array containing only transactions for specified inventoryItem
//data struct: array of objects
//alg:
//  create empty result array
//  iterate through transactions
//    if id property in element is equal to invetory item
//      push element into result array
//  return result array

let transactionsFor = (inventoryItem, transactions) => {
  let results = [];
  
  transactions.forEach(ele => {
    if (ele.id === inventoryItem) {
      results.push(ele);
    }
  });
  return results;
};

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

console.log(transactionsFor(101, transactions));