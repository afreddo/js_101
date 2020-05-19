//input: string of words and random characters
//output: string with all non-alphabetic characters replaced with spaces
//  only replace first non-alphabetic character with space
//data struct: strings
//alg: first replace all non-alphabetic characters with spaces
//  loop through string
//  if character is ' ' && character next is ' ', replace ' ' with ''
//  return string

let cleanUp = str => {
  
  str = str.replace(/[^a-z]/gi, ' ').replace(/\s+/gi, ' ');
  console.log(str);
  
};

cleanUp("---what's my +*& line?");