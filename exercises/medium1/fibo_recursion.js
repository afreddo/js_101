//input:  number representing final index
//output: sum of all fibo numbers leading up to and including the index
//rules:
//  -  must use recursive function
//data struct: numbers
//alg:
//  create function accepting 1 argument
//    arg - index 'n'
//    if index is 1, return 1
//    return function(n) + function(n-1)

let fibonacci = n => {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
};

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765