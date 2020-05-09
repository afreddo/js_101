//input: takes int and converts it to string
//output: return string with proper signage in front. zero must return zero
// should use Math.sign()
// data struct: strings
//alg:
//  remove sign from number if it has one and pass it to integerToString()
//  set value equal to string
//  if the initial int has a sign, put the appropriate string sign on the string
//  return final string

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

function signedIntegerToString(int) {
  let string;
  if (Math.sqrt((int)**2) === int) {
    string = integerToString(int);
  } else {
    string = integerToString(int*-1);
  } 
  switch (Math.sign(int)) {
    case 1: return '+' + string;
    case -1: return '-' + string;
    default: return string;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");