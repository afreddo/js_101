//input:  non-empty string
//output: mmiddle characters of string (odd length 1 answer even length: 2)
//data struct:  strings
//alg:  
//  if length is odd return two middle chars
//  else return one middle char

let centerOf = string => {
  
  let middle = string.length / 2 - 1;
  if (string.length % 2 === 0) {
    return string[middle] + string[middle+1];
  } else {
    return string[Math.ceil(middle)];
  }
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"