let multiply = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    array[i] *= num;
  }
  return array;
};

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]