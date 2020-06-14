//input:  index of final number to compute
//output: sum of all values 1 to index including the index
//rules:
//  - use recursion /w memoization
//data struct:
//    - numbers
//alg:
//  create empty memo object
//  create function with one argument of index
//  if n = 1 or 2 then return 1
//  memo['1'] = 1;
//  memo['2'] = 1;
//  memo[index] = function(n-1) + function(n-2);
//  return memo[index];

let memo = {};

let fiboMemo = n => {
  if (n === 1 || n === 2) return 1;
  if (memo[n]) {
    return memo[n];
  } else {
    return memo[n] = fiboMemo(n - 1) + fiboMemo(n - 2);
  }
};

console.log(fiboMemo(20));       // 6765
console.log(fiboMemo(50));       // 12586269025
console.log(fiboMemo(75));       // 2111485077978050