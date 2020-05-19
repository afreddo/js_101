// input:  number
// output:  true if palin. or false if not
// data struct number=>string=>array
// alg:
//  convert number to string
//  convert string to array
//  reverse array
//  convert array back into string
//  convert string to number
//  compare new string to old one and return true if they are the same else return false

let isPalindromicNumber = number => {
  return number === Number(number.toString().split('').reverse().join(''));
};

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(00100));
