//input:  two arrays
//output:  returns new array containing elements from both arrays ouput in 
//    alternation
//data struct: arrays
//alg:
//  create new array 
//  iterate through arrays
//    switch everyother array to store element in new array
//  return new array

let interleave = (array1, array2) => {
  let arrayNew = [];
  let start1 = 0;
  let start2 = 0;
  for (let i = 0; i < (array1.length * 2) ; i++) {
    if (i % 2 === 0) { 
      arrayNew.push(array1[start1]);
      start1 += 1;
    } else {
      arrayNew.push(array2[start2]);
      start2 += 1;
    }
  }
  return arrayNew;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
