let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let selectFruit = obj => {
  let keys = Object.keys(produce);
  let object = {};
  for(let i = 0; i <= keys.length; i++) {
    let currentKey = keys[i];
    let currentValue = obj[currentKey];
    console.log(currentValue);
    
    if (currentValue === 'Fruit') {
      object[currentKey] = currentValue;
    }
  }
  return object;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }