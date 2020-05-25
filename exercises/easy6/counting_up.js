//input:  integer
//output: array containing all integers between 1 and argument (inclusive) in
//    ascending order
//data struct: arrays
//alg:
//  while iterator <= integer
//    store iterator in array
//  return array

let sequence = int => {
  let array = [];
  for (let idx = 1; idx <= int; idx++) {
    array.push(idx);
  }
  return array;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]