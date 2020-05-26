let doubleOddIndices = nums => {
  let newNums = [];
  
  for (let idx = 0; idx < nums.length; idx++) {
    (idx % 2 === 1) ? newNums.push(nums[idx] * 2) : newNums.push(nums[idx]);
  }
  return newNums;
}








let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]