//input:  string consisting of zero or more space separated words
//output:  object that shows the number of words of different sizes
//alg:
//  seperate string into array of words
//  loop through array
//  if key exists for that word length add 1
//  else create the key starting at 1
//  return the object

let wordSizes = string => {
  let array = string.split(' ');
  let object = {};
  if (string) {
    for (let i = 0; i < array.length; i++) {
      if (object.hasOwnProperty(String(array[i].length))) {
        object[`${array[i].length}`] += 1;
      } else {
        object[`${array[i].length}`] = 1;
      }
    }
    return object;
  } else {
    return {};
  }
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}