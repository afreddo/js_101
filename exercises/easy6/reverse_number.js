//input:  positive integer
//output:  returns the number with digits reversed
//data struct: arrays
//alg:
//  while the remainder is not equal to the number
//    find the remainder of the number and (10,100,1000,etc)
//    store the remainder in the first index of an array
//  reverse the array
//  join the array
//  turn the array into a sting then the string into a num
//  return num

let reverseNumber = num => Number(String(num).split('').reverse().join(''));

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1