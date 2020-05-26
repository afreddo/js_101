//input:  a positive integer
//output: sum of its digits
//data struct: arrays
//alg:
//  turn number into array of numbers
//  loop through array and add each element together to get sum
//  return sum

let sum = num => num.toString().split('').reduce((value, ele) => value + Number(ele), 0);

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
