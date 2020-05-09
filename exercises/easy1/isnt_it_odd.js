//Input: one integer (+,-,or 0), valid integer
//Output:returns true if odd
//test:
//isOdd(0); returns false
//isOdd(1); returns true
//isOdd(10); returns false
//isOdd(-3); returns true
//data structure: number
//Alg:
//convert value to absolute value
//if value % 2 is 1 then return true else return false

let isOdd = num => {
  return (Math.abs(num) % 2 === 1);
};

console.log(isOdd(0));
console.log(isOdd(1));
console.log(isOdd(10));
console.log(isOdd(-3));