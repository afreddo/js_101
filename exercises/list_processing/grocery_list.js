//input:  2-d array of fruit, quantity
//output: 1-d array of fruits
//rules:
//  explicit:
//    - fruits must appear the same number of times as quantity
// data struct: arrays
//alg:
//  create array of fruit names and array of fruit quantity
//  create empty results array;
//  iterate over fruit array
//    repeat fruit[idx] for quantity[idx] number of times and split into array
//    push result into results array
//  return result array

let buyFruit = array => {
  let results = [];
  let fruits = array.map(ele => ele[0]);
  let quantity = array.map(ele => ele[1]);
  fruits.forEach((ele, idx) => results.push(...`${ele} `.repeat(quantity[idx]).split(' ')));
  console.log(results);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]