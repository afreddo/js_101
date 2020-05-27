//input:  string
//output: return array containing every word followed by a space and the words 
//        length
//rules:
//      Explicit:
//        - if argumenbt is empty string or no argument is passed, return []
//data struct: arrays
//alg:
//  check if argument is '' and return [] ifso
//  split array into array of words
//  transform array into new array
//    return ele + ' ' + String.(ele.length)
//  return array 

let wordLengths = (string = '') => {
  if (string === '') return [];
  return string.split(' ').map(ele => ele + ' ' + ele.length);
};

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
