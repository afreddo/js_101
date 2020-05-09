//input: two arguments of any data type
//output: returns product of both arguments
//need to check if its a number
//data struct: numbers
//algo:
//check if input is valid
//returns product of two arguments

let isValid = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new TypeError('This is invalid input. Needs a number.');
  }
}

let multiply = (num1, num2) => {
  isValid(num1, num2);
  return num1 * num2;
}


console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(0,0));
// console.log(multiply('', 7));
// console.log(multiply([],{}));
