let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => {
  let num1 = Number(a);
  let num2 = Number(b);
  return num2 - num1;
  });
  
console.log(arr);