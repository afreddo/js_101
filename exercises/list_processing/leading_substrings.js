//input:  string argument
//output: return list of all substrings that start from the beginning of the string
//rules:
//    - ordered from shortes to longest
//data struct: strings and arrays
//alg: 
//  create empty array
//  while iterator is less than length of string
//    push substring starting at start to start + iter
//  sort array by length
//  return sorted array

let substringsAtStart = string => {
  let array = string.split('');

  let newArray = array.map((ele, idx, idxArray) => {
    return idxArray.join('').substring(0,idx+1);
  })
  
  return newArray.sort((str1, str2) => str1.length - str2.length);
};

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

