//input:  strings
//output: returns array of all palindromic substrings in string
//rules:
//    - sorted by order of appearance in input string
//    - dubplicate substrings should be included multiple times
//    - case matters
//    - single characters are not palindromes
//  implicit:
//    - no matches returns blank array
//data struct arrays/strings
//alg:
//  create empty results array
//  break string into list of substrings using strings()
//  iterate through array of substrings
//    if substing is equal to the substring reversed
//      add substring to results array
//  return results array

let substringsAtStart = string => {
  let array = string.split('');

  let newArray = array.map((ele, idx, idxArray) => {
    return idxArray.join('').substring(0,idx+1);
  })
  
  return newArray.sort((str1, str2) => str1.length - str2.length);
};

let substrings = string => {
  let bigArray = [];
  
  let arrayTrunc = string.split('').map((ele, idx) => string.substring(idx));
  arrayTrunc.forEach(ele => {
    bigArray.push(...substringsAtStart(ele))
    });
  return bigArray;
}

let palindromes = string => {
  let results = [];
  let substringList = substrings(string);
  substringList.filter(ele => ele.length > 1).forEach(ele => {
    if (ele === ele.split('').reverse().join('')) {
      results.push(ele);
    }
  });
  return results;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]