//input: any year number
//output: returns true if year is leap year, false if year is not leap year
//rules:
//leap years must  % 2 === 0
//must % 100 !== 0 || % 400 === 0
//input must be > 0
//Algo: Get year = number
//throw error if !> 0
//test rules and return true if passes or false if doesnt

let isValid = year => {
  if (year <= 0 || parseInt(year) !== year) {
    throw new TypeError('This is an invalid year. Year must be > 0 and be an integer');
  }
}

let isLeapYear = year => {
  isValid(year);
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
// console.log(isLeapYear(0));
// console.log(isLeapYear(-7));
// console.log(isLeapYear(50.8));