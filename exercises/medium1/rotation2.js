//input:  number and a count
//output: return a number with the number at the count rotated to the end
//Rules:
//    - count starts at the last digit and works to the front
//data struct: arrays
//test cases: NaN should return NaN
//            count greater than number length or less than 1 should return NaN
//alg:
//  convert to array of numbers
//  check if NaN or count not in index and return NaN if so
//  add number at count to the end
//  use splice to remove the number from the array
//  convert back to number
//  return the number

let rotateRightmostDigits = (num, count) => {
  if (isNaN(num)) return NaN;
  
  let array = num.toString().split('');
  
  if (count < 1 || count > array.length) return undefined;
  
  array.push(array.splice(-count, 1));
  
  return Number(array.join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(735291, -4));
console.log(rotateRightmostDigits('', 1));
