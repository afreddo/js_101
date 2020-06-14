let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((subA, subB) => {
  let sumA = 0;
  let sumB = 0;
  subA.forEach(num => {
    if (num % 2 === 1) {
      sumA += num;
    }});
  subB.forEach(num => {
    if (num % 2 === 1) {
      sumB += num;
    }
  });
  return sumA - sumB;
});

console.log(arr);