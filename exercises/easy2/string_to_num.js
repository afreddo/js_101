//input: string of digits. Can assume only valid numbers in string
//output: return the string converted to an integer.
//data struct: array of numbers
//alg:
// take string and convert to array of numbers
// find index of '.'
// if there is no '.' then return number
// else return part of array leading to '.'
// convert array into string then string into number

function stringToInteger(string) {
  let intCutOff = string.split('').indexOf('.');
  return (intCutOff === -1) ? +string : +string.slice(0,intCutOff);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true