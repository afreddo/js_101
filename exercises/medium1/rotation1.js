//input: array
//output: return array with first element rotated to final position
//Rules:
//    - if input is not array return undefined
//    - if input is empty array, return empty array
//    do NOT modify original array
//data struct: arrays
//Alg:
//  if not an array return undefined
//  if argument is an empty array, return empty array
//  create shallow copy of array
//  add first element onto end of array
//  remove first element of the array
//  return the array

let rotateArray = (array = 0) => {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  
  let copy = array.slice();
  copy.push(copy[0]);
  copy.shift();
  
  return copy;
};

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]