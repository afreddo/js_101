//input: an array and an object
//  the array contains multiple strings
// the object contains two keys that represent work and occupation
//output: return greeting that uses persons full name and mentions their title
// data struct: convert array and object to string
// alg:
//  get input
// turn array into string seperated by spaces
// combine two object keys into one string
// return both strings concat

let greetings = (array, object) => {
  let name = array.toString().replace(/,/g, ' ');
  let job = Object.values(object).toString().replace(/,/g, ' ');
  return 'Hello, ' + name + '! Nice to have a ' + job + ' around.';
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);