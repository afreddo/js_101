let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  for (let letter in obj) {
    obj[letter] += 1;
  }
  return obj;
});

console.log(arr);