//input:  two arrays
//output:  arrays containing union of two input arrays. No duplicates
//data struct: arrays
//algorithm:
//  loop through array and if array components after current component contain 
//    a matching character then remove them from the array
//  return final array

let union = (array1, array2) => {
  let newArray = array1.concat(array2);
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i+1; j < newArray.length; j++) {
      if (newArray[i] === newArray[j]) newArray.splice(j,1);      
    }
  }
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([], [4, 8, 'cat',4]));