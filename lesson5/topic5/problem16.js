let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.forEach(subarray => {
  obj[subarray[0]] = subarray[1];
});

console.log(obj);