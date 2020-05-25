function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  } while (divisor > 0);
  return factors;
}

console.log(factors(1));
console.log(factors(10));
console.log(factors(0));
console.log(factors(-5));