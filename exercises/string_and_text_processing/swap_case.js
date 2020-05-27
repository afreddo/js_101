//input:  string
//output: string with every lowerCase letter changed to uppercase and every 
//        uppercase changed to lowercae.
//data struct: array
//alg:
//  split string into array of words
//  transform array into new array with capitals and lowercase switched
//    transform and split each element into element with capitals and lowercase switched
//      if char in element matches lowercase
//        capitalize the letter
//      else 
//        lowercase the letter
//      join element
//    return element
//  return joined array

let swapCase = string => {
  return string.split(' ').map(ele => ele.split('').map(element => {
    if (/[a-z]/.test(element)) {
      return element.toUpperCase();
    } else {
      return element.toLowerCase();
    }
  }).join('')).join(' ');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"