//input:  array
//output: reverse its elements in place
//data struct: arrays
//alg:
//  while iterator < length of the array 
//  place last element in at the beginning of the array
//  delete last element
//  return new array

let reverse = list => {
  let i = list.length-2;
  let end = list.length - 1;
  while (i >= 0) {
    list.push(list[i]);
    i -= 1;
  }
  list.splice(0,end)
  return list;
};

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true