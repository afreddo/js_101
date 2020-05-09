//input: two strings. Can assume they are different lengths
//Output: returns result of concatenating the shorter + longer + shorter
//Data: strings
//test: use examples & add a symbol/number
//Alg: Get input in form of strings
//compare lengths at set longer to longer and shorter to shorter
//return concat string

let shortLongShort = (str1, str2) => {
 let short;
 let long;
 if (str1.length > str2.length) {
   long = str1;
   short = str2;
 } else {
   long = str2;
   short = str1;
 }
 return short + long + short;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('%&*', '18&*6'));