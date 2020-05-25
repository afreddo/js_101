//input:  array of integers
//output:  return average of all integers in the array rounded down to 
//    integer component of the average
//data struct: array
//alg:
//  sum all of the integers together
//  divide by length of array
//  round down to integer
//  return average

let average = ints => {
  let sum = ints.reduce((value, ele) => value + ele, 0);
  let avg = sum / (ints.length);
  return Math.floor(avg);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40