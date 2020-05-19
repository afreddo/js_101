//input:  string
//output:  true if string is a palindrome, false otherwise
//  ignore non alphabetic characters and should be case insensitive.
//data struct: string
//alg:
//  reverse the string
//  if string is the same as reversed string, return true
//  else false

let isRealPalindrome = string => {
  let stringNew = transformString(string);
  let reverse = stringNew.split('').reverse().join('');
  return stringNew === reverse;
};

let transformString = string => {
  return string.toLowerCase().replace(/[^a-z0-9]/gi, '');
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // false (case matters)
console.log(isRealPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false