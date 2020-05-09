//input: non-negative integer value
//output: return string of that integer
//data struct: arrays
//alg:
//  turn into array
//  while num !== (num % iterator), log in array the num%iterator - oldvalue
//  join array into string
// return string

let integerToString = num => {
  let iter = 1;
  let array = [];
  do {
    let divisor = 10**iter;
    array.push(num%divisor);
    iter++;
  } while (num % (10**(iter-1)) !== num)
  let newArray = [array[0]];
  for (let i = 1; i < array.length; i++){
    newArray.push((array[i]-array[i-1])/(10**(i)));
  }
  return newArray.reverse().join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"