//input: number
//output: return number x2 unless it is a double number then return number
// rules for double:
//  first half of number === second half of number
//  number length must be even
//  data struct: numbers => strings => numbers
//alg:
//  convert number to string
//  check if number is a double
//    if its a double return the number
//  else multiply it by 2
//  return number

function twice (number) {
  let numStr = String(number);
  let length = numStr.length;
  if (numStr.length % 2 === 0 && numStr.slice(0,length/2) === numStr.slice(length/2)) {
    return number;
  } else {
    return number*2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
console.log(twice(0)); 
console.log(twice()); 