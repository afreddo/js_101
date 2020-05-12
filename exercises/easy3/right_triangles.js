//input: positive integer
//output: outputs a right triangle whose sides have n stars
//  hypotenuse should be on left side
//data struct:
//  array of strings
//alg:
//  while iterator is < integer
//  build array of stars:
//    n-i:spaces plus i stars
//  log array as a triangle

let triangle = integer => {
  let array = [];
  for (let i = 0; i <= integer; i += 1) {
    array[i] = `${" ".repeat(integer - i)}${"*".repeat(i)}`;
    console.log(array[i]);
  }
}

triangle(5);
triangle(9);
