//input:  string
//output: return string with all words capitalized
//  rules:
//      - capitalize first letter and lowercase all after
//data struct: arrays
//alg:
//  lowercase the string
//  Set array = string seperated by spaces
//  transform array into new array with beginning of each element capitalized
//  return array

let wordCap = string => {
  let array = string.toLowerCase().split(' ');
  return array.map(ele => ele[0].toUpperCase() + ele.slice(1)).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'