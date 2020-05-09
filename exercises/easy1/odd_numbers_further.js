//input: None
//output: All odd numbers from 1 to 99 logged to console on seperate lines
//algorithm: while iterator is <= 99 log number then iterate by 2
const input = require('readline-sync');

console.log('What should the starting limit be?');
const startLim = input.question();

console.log('What should the end limit be?');
const endLim = input.question();



let i = parseInt(startLim);

while (i <= endLim) {
  
  if (i % 2 === 1) console.log(i);
  
  (i % 2 === 1) ? i +=2 : i += 1;
}

