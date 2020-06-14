//input:  array of integers
//output:  return index where both sides are equal
//rules:  index value not included
//        if there is no answer then return -1
//alg:
//  loop through array
//  for each value set left side to index 0:i-1
//  set right side to index+1 to end of array
//  sum left and right side and compare
//  if left === right return index
//  return -1 in outer loop

let findEvenIndex = array => {
  for (let i = 0; i < array.length; i++) {
    let leftSide = array.slice(0,i).reduce((accumulator, ele) => accumulator + ele, 0);
    let rightSide = array.slice(i+1, array.length).reduce((accumulator, ele) => accumulator + ele, 0);
    if (leftSide === rightSide) return i;
  }
  return -1;
}



console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true