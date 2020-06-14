//input:  sentence string
//output: string with every occurrence of a "number word" converted to corresponding
//        digit
//rules: 0 - 9 have word equivelants
//data struct: array of words
//alg:
//  create array of number words
//  turn sentence into array of words
//  transform array into new array
//    if word is included in number words
//      return number word index
//    else return word
//  return array converted to string

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let wordToDigit = sentence => {
  
  for (let i = 0; i < numberWords.length; i++) {
    let numWord = new RegExp(numberWords[i], 'g');
    sentence = sentence.replace(numWord, i);
  }
  return sentence;
  // return sentence.split(' ').map(word => {
  //   if (numberWords.includes(word)) {
  //     return numberWords.findIndex(ele => ele === word);
  //   }
  //   return word;
  // }).join(' ');
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."