//input:  number
//output: return negative version of number (leave negative if its negative)
//data struct: numbers
//alg:
//  if number is negative return number
//  else multiply by -1 and return number

let negative = num => (Math.sqrt(num**2) === num) ? -1 * num : num;

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0