//input:  string containing first name, a space and a last name
//output: returns new string consisting of 'last name, first name'
//data struct: arrays
//alg:
//  seperate into array
//  reverse array
//  join array with ', ' as a seperator
//  return string

let swapName = string => string.split(' ').reverse().join(', ');

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"