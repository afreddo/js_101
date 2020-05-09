//input: two arguments of any type
//output: return true or false depending on the arguments truthiness
// must have one be truthy and one be falsy
// alg:
//  use conditionals to find if one is true and one is false, if that is true then
//  output true else output false

function xor(arg1, arg2) {
  return (arg1 && !arg2) || (arg2 && !arg1);
}


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

