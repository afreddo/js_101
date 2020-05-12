//input: a positive integer (number)
//output: string of alternating '1's and '0's matching the number of the int
//data structure: string
//alg:
//  while iterator is <= number, odd iterations are a 1, evens are a 0
//  return string

let stringy = num => {
  let string = '';
  for (let i = 1; i <= num; i +=1) {
    if (i % 2 === 1) {
      string += '1';
    } else {
      string += '0';
    }
  }
  return string;
};

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"