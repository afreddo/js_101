//input:  array of numbers
//output:  array of same number of elements with each element's value being the 
//  running total from the original array
//data struct: arrays
//alg:
//  iterate through each element of array and add current number to total and store
//  in an array
//  return the array

let runningTotal = array => {
  return array.reduce((accumulator, element) => {
    if (element === array[0]) {
      accumulator.push(element);
    } else {
      accumulator.push(accumulator[accumulator.length - 1] + element);
    }
    return accumulator;
  }, []);  
};

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []