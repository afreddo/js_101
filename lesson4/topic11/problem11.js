let statement = "The Flintstones Rock";

let letters = statement.split('');
let obj = {}

let count = 0;

letters.forEach((ele, idx) => {
  if (letters.slice(0,idx).includes(ele)) {
    count += 1;
  }
  obj[ele] = count;
});

console.log(obj);
