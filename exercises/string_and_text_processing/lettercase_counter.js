//input:  string
//output: returns object with 3 properties: number of lowercase letters, number
//        of characters that are uppercase, number of characters that are neither
//data struct: string, object
//alg:
//  create empty object
//  set lowercase property of object equat to number of lowercase letters
//  ...
//  ...
//  return object

let letterCaseCount = string => {
  let obj = {};
  let upper = string.match(/[A-Z]/g) || 0;
  let lower = string.match(/[a-z]/g) || 0;
  if (!upper) {
    obj.uppercase = upper;  
  } else {
    obj.uppercase = upper.length;
  }
  if (!lower) {
    obj.lowercase = lower;
  } else {
    obj.lowercase = lower.length;
  }
  obj.neither = string.length - obj.lowercase - obj.uppercase;
  
  return obj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }