//input:  string
//output:  doubles every consonant character (dont double a,e,i,o,u), or non letters
//data struct: arrays
//alg:
//create array
//iterate through string
//  if letter is consonant, push it twice to array
//  else push it once to array
//transfrom array into string
//return string

let doubleConsonants = string => {
  let array = [];
  for (let idx = 0; idx < string.length; idx++) {
    if (/b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z/.test(string[idx])) {
      array.push(string[idx],string[idx]);
    } else {
      array.push(string[idx]);
    }
  }
  return array.join('');
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
