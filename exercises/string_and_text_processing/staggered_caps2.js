//input:  string
//output: returns string with staggered cap scheme
//  rules:
//      - ignores non-alphabetical chars when staggering
//data struct: arrays
//alg:
//  create empty count
//  split array into array of chars
//  transform array into new array 
//    if count is even
//      increment count by 1
//      ele is cap
//    if count is odd
//      increment count by 1
//      ele is lower
//    else return ele
//  join array
//  return array

let staggeredCase = string => {
  let count = 0;
  return string.split('').map((ele,idx) => {
    if (/[^a-z]/gi.test(ele)) return ele;
    if (count % 2 === 1) {
      count += 1;
      return ele.toLowerCase();
    } else {
      count += 1;
      return ele.toUpperCase();
    }
  }).join('');

}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);