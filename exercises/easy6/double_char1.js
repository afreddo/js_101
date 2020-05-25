//input:  string
//output:  returns new string with each char doubled
//data struct: array
//alg: 
//  create empty array
//  iterate through string
//  set every other array index equal to current char
//  loop through array
//  if index is zero then set index equal to the index before it
//  turn array into string
//  return string

let repeater = string => {
  let array = [];
  let counter = 0;
  array.length = string.length * 2;
  for (let i = 0; i < string.length; i++) {
    array[counter] = string[i];
    if (i > 0) array[counter-1] = string[i];
    counter += 2;
  }
  return array.join('');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

