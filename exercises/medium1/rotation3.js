//input:  number
//output: rotated number
//rules:
// -  rotate first digit to end
//  - freeze first number and rotate next digit to end
//    - freeze first two numbers and rotate next digit to end
//    - stop when there is only one number left to rotate
//data struct:  strings
//alg:
//  convert number to string
//  loop through length of string descending order
//    use rotateRightmostDigits to rotate string
//      set count equal to iteration
//  return string converted to number

let rotateRightmostDigits = (num, count) => {
  if (isNaN(num)) return NaN;
  
  let array = num.toString().split('');
  
  if (count < 1 || count > array.length) return undefined;
  
  array.push(array.splice(-count, 1));
  
  return Number(array.join(''));
};

let maxRotation = num => {
  let length = num.toString().length;
  for (let i = length; i > 1; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }
  return num;
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845