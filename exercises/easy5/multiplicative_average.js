//input:  array of integers
//output:  returns string of multiplying all numbers together and dividing them
//    by the total number of integers. String must be rounded to 3 decimals
//data struct: arrays
//alg:
//  iterate over array and add multiply each element by the product of the
//    previous two elements
//  divide total product be length of array
//  convert number to 3 decimal places
//  output string

let multiplicativeAverage = integers => {
  let product = integers.reduce((value,int) => value*int, 1);
  let divided = product / (integers.length);
  let numFinal = divided.toFixed(3);
  return String(numFinal);
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"