//input: string of digits. It can start with + or -. assume always valid #
//output: number with correct sign
//data struct: arrays
//alg:
//build object with number key values
//build array of numbers
//if array starts with + convert array to positive int
//if array starts with - convert array to negative int
//if array starts with number convert to positive int
//return number

let nums = {
  0:0,
  1:1,
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9,
  '+':'+',
  '-':'-',
}

function stringToInteger(string) {
  let array = [];
  let intEnd = string.split('').indexOf('.');
  if (intEnd === -1) {
    array = string.split('').map(value => nums[value]);
  } else {
    array = string.split('').map(value => nums[value]).slice(0,intEnd);
  }
  let num = 0;
    for (let i = 0; i < array.length; i++) {
      num += array[i]*(10**(array.length-(i+1)));
    }
  return num;
}

function stringToSignedInteger(str) {
  
  switch (str[0]) {
   case '+': return stringToInteger(str.slice(1));
   case '-': return -stringToInteger(str.slice(1));
   default: return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
console.log(stringToSignedInteger('-6.7'));