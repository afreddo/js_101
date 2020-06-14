let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr = arr.map(ele => {
  if (typeof a === 'number') {
  return ele.slice().sort((a, b) => {
    return b - a;
  })} else {
  return  ele.slice().sort((a,b) => {
      if (a > b) {
        return -1;
      } else if (b > a) {
        return 1;
      } else {
        return 0;
      }
    })
  }
});

console.log(arr);