//input: string argument
//output: string argument with all duplicate characters collapsed into one
//data struct: array of characters
//alg:
//  transform string argument into array of characters
//  iterate through array and if the current character is different than the 
//  next character, save current character in a new array
//  transform new array into string
//  return new string

let crunch = string => {
 let arrayOriginal = string.split('');
 let arrayNew = [arrayOriginal[0]];
 let iterator = 0;
 while (iterator < arrayOriginal.length-1) {
   if (arrayOriginal[iterator] !== arrayOriginal[iterator+1]) {
     arrayNew.push(arrayOriginal[iterator+1]);
   }
   iterator += 1;
 }
 return arrayNew.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""