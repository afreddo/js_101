//input:  string of words seperated by spaces
//output:  string of words with first and last letter of each word swapped
//data struct: arrays
//alg:
//  seperate string into array of words
//  iterate through each element and if element length is greater than 1
//    then split element into array of characters, then swap first and last letter
//    turn array of characters back into string
//    assign string to element
//  turn new array into string seperated by spaces
//  return new string

let swap = string => {
  let arrayNew = string.split(' ').map(element => {
    if (element.length <= 1) { 
    return element = element;
    } else {
    let characters = element.split('');
    characters.push(characters[0]);
    characters.shift();
    return element = characters.join('');
    }
  });
  return arrayNew.join(' ');
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"