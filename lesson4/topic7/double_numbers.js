function doubleNumbers(numbers) {
  let end = numbers.length-1;
  for (let counter = 0; counter <= end; counter++) {
    let currentNum = numbers[counter];
    numbers.push(currentNum * 2);
  }
  numbers.splice(0,end);

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]