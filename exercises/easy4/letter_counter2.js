//input:  strings of words with non-letters included
//output: same as before but not including non-words
//data struct: objects
//alg:
//  save each word into new string with non-characters replaced by ''.

let wordSizes = string => {
  let array = string.split(' ');
  let object = {};
  for (let i = 0; i < array.length; i++) {
    let word = array[i].replace(/[^a-zA-Z]/gi, '');
    
    if (word.length === 0) continue;
     
    if (object.hasOwnProperty(String(word.length))) {
      object[`${word.length}`] += 1;
     } else {
      object[`${word.length}`] = 1;
    }
  }
  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}