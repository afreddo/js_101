//input:  string
//output: returns string with staggered cap scheme
//  rules:
//      Explicit:
//        - 1: cap 2: lower 3: cap ...
//data struct: arrays
//alg:
//  split string into array of characters
//  transform array into new array
//    if element is non alphabetic then return char
//    else if element is at idx odd cap
//    else lower
//  join characters
//  return array

let staggeredCase = string => {
  return string.split('').map((ele,idx) => {
    if (/[^a-z]/gi.test(ele)) {
      return ele;
    } else if (idx % 2 === 0) {
      return ele.toUpperCase();
    } else {
      return ele.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"