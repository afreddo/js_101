let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr = arr.map(subarray => subarray.filter(ele => ele % 3 === 0));

console.log(arr);