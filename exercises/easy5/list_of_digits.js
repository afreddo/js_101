//input:  a positive integer
//output:  return list of digits in number
//data struct: number>string>array
//alg:
//  convert number into string
//  convert string into array
//  return array

let digitList = number => String(number).split('').map(ele => Number(ele));

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]