//input:  array of strings
//ouput:  return array of same string without vowels
//data struct: arrays
//alg:
//  transform array so that each element has vowels removed
//  return array

let removeVowels = array => array.map(ele => ele.replace(/a|e|i|o|u/gi, ''));

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]