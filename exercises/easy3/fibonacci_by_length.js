//input:  integer always greater than or equal to 2
//output:  index of first fibonacci number that has the number of digits
//  specified by the argument
// data struct: numbers
//alg:
//  do fibonnaci element (i) === sum of past two numbers
//  iterator + 1
//  while fibonacci sequence array element length !== integer
//  return iterator

let findFibonacciIndexByLength = integer => {
  let fib = [1,1];
  let lastElement;
  let iterator = 1;
 while (true) {
    fib.push(fib[iterator]+fib[iterator-1]);
    lastElement = String(fib[fib.length-1]);
    if (lastElement.length === integer) return iterator+2;
    iterator += 1;
 }
};

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
  