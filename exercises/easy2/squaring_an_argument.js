//input: one arguments
//output: return square of argument
//data struct: num
//alg
//validate that the input is a numbers
//return square of argument

let isValid = num => {
  if (typeof num !== 'number') throw new TypeError('Need to pick a number');
}

let square = num => {
  isValid(num);
  return num*num;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
// console.log(square('&'));