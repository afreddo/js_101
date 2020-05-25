//input:  string argument contain 1 or more words
//output: returns new string with 5+ letter words with letters reversed
//data struct: arrays
//alg:
//  seperate into array of words
//  create new array with words of 5+ characters reversed
//  combine into string
//  return string

let reverseWords = string => {
  let array = string.split(' ').map(ele => (ele.length >= 5) ? ele.split('').reverse().join('') : ele);
  return array.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"