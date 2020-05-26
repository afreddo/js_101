let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let obj = {};
let keys = Object.keys(flintstones);

flintstones.forEach((ele, idx) => {
  obj[ele] = keys[idx];
});

console.log(obj);