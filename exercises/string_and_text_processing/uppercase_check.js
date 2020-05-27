//input:  string argument
//output: returns true if all alphabetic chars are uppercase. Ignore non alphabetic
//data struct: string
//alg:
//  convert non alphabetic to ''
//  check if every value is uppercase

let isUppercase = string => {
  string = string.replace(/[^a-zA-Z]/gi, '');
  return string === string.toUpperCase()
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true