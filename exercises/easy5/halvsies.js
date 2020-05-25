//input:  an array of any size
//output:  a nested array with the the first half (and middle) in first array
//    the rest in the second nested array
//data struct: arrays
//alg: create two new arrays
//  if length of given array is <= 1 then set array1 = to given array
//  else iterate through array and if index <= length of array / 2 rounded up then 
//    push element into array1
//    else push element into array2
//    return array containing array1 and array2

let halvsies = array => {
  let array1 = [];
  let array2 = [];
  if (array.length <= 1) return [array, array2];
  for (let i = 0; i < array.length; i++) {
  (i <= Math.ceil(array.length / 2 - 1)) ? array1.push(array[i]) : array2.push(array[i]);
  }
  return [array1, array2];
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]