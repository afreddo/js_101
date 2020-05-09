//input: array
//output: return an array containing every other element (1,3,5,...)
//data struct: array
//alg:
//  while iterator is less than length of array, place every other element
//  into new array
//  return new array

function oddities(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []