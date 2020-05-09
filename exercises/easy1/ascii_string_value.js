//input: string
//output: sum of ascii value of all char in string
// Use string.prototype.charCodeAt()
//data struct: string and array of numbers
//alg: while i < str.length record ascii value in array of numbers
// sum all of the values in the array of numbers
// return sum

let arrayValues = str => {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    array.push(str.charCodeAt(i));
  }
  return array;
}

let asciiValue = str => {
  let values = arrayValues(str);
  return values.reduce((accum, value) => accum + value,0);
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
console.log(asciiValue('47 &*%~'));