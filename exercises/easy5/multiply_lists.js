//input:  two arrays consisting of numbers
//output:  returns new array with product of each pair in the same index
//data struct: arrays
//alg:
//  create two arrays from lists in given array
//  create product array
//  iterate through arrays
//    set product of current index to product array
//  return product array

let multiplyList = (array1, array2) => {
  let products = [];
  
  for (let idx = 0; idx < array1.length; idx++) {
    products.push(array1[idx]*array2[idx]);
  }
  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]