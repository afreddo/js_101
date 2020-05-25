//input:  two integers, first is count and second is starting number of sequence
//output: return array with same numebr of elements as the count argument,
//    value of each element should be a mutiple of the stating number.
//    if count = 0 then return empty array
//data struct: arrays
//alg:
//  if count is 0, return []
//  while iterator is less <= count
//    store starting number * iterator in array
//  return array

let sequence = (count, start) => {
  if (count === 0) return [];
  
  let array = [];
  for (let i = 1; i <= count; i++) {
    array.push(i * start);
  }
  return array;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []