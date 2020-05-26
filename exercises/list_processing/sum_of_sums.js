//input:  array of numbers
//output: return sum of the sums of each leading subsequence for that array
//rules:
//    - sub-sequence is the same as substring
//data struct: arrays
//alg:
//  create empty subsequence array
//  iterate over given array and save each subsequnce in empty array
//  Set sum array = iterating over subsequence array and summing up each element
//  iterate over sum array and sum up elements
//  return final sum

let sumOfSums = numbers => {
  let subSequences = numbers.map((_, idx, idxArray) => {
    return idxArray.slice(0,idx+1);
  });
  let sumsArray = [];
  subSequences.forEach(element => sumsArray.push(element.reduce((value, ele) => value + ele)));
  return sumsArray.reduce((value, ele) => value + ele);
  
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35