//input: a number > 1
//output: number representing the sum of all numbers that are multiples of
// 3 and 5 between 1 and the chosen number inclusive
//Data struct: array of numbers
//alg: make array of numbers between 1 and chosen number
//  filter for multiples of 3 or 5
//  reduce array to get sum of numbers
// return sum

let makeArray = num => {
  let arr = [];
  for (let i = 1; i <= num; i += 1) arr.push(i);
  return arr;
}

let multisum = number => {
  let array = makeArray(number);
  let multiples = array.filter(num => (num % 3 === 0 || num % 5 === 0));
  let sum = multiples.reduce((accum, value) => accum + value, 0);
  return sum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));