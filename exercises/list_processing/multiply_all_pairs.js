//input:  two array arguments, each with list of numbers
//output: return a NEW array containing products of all combinations of number 
//    pairs existing between two arrays
//Rules:
//  sort according to numerical order
//  assume that neither argument is an empty array
//data struct: arrays/numbers
//alg:
//  create new empty array
//  set totalLength = arg1 length * arg2 length
//  iterate while iteration is < arg1 length
//    iterate while iteration is < arg2 length
//      multiply each of the components against one another and push to new array
//  sort new array
//  return new array

let compare = (num1, num2) => {
  if (Number(num1) > Number(num2)) {
    return 1;
  } else if (Number(num1) < Number(num2)) {
    return -1;
  } else {
    return 0;
  }
}

let multiplyAllPairs = (arr1, arr2) => {
  let products = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      products.push(arr1[i] * arr2[j]);
    }
  }
  return products.sort(compare);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]