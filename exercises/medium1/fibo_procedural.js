//input:  number representing final index
//output: sum of all fibo numbers leading up to and including the index
//rules:
//  -  must use procedural format
//data struct: numbers
//alg:
//  assign n1 = 1
//  assign n2 = 1
//  loop through indices
//    assign sum = n1 + n2
//    assign n1 = n2
//    assgin n2 = sum
//  return sum

let fibonacci = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let n1 = 1;
  let n2 = 1;
  let sum = 0;
  for (let idx = 3; idx <= n; idx++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
};

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050