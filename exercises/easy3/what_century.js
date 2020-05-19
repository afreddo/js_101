//input: number representing the year
//output: string that begins with the centry number and ends with 'st', 'nd',
//  'rd', or 'th' as appropriate for that number
// rules:
//  0,4,5,6,7,8,9 - 'th'
//  2 - 'nd'
//  3 - 'rd'
//  1 - 'st'
//data struct: strings
//alg:
//  century is number / 100 rounded up
//  turn number into string
//  if (apply rules), return proper string ending
//  return string

let century = number => {
  let centuryNum = Math.ceil(number / 100);
  let string = String(centuryNum);
  let lastNum = string[string.length-1];
  if (string.slice(string.length-2) > 10 && string.slice(string.length-2) < 20) {
     switch (lastNum) {
      case '0':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '2':
      case '3':
      case '1':
        return centuryNum + 'th';
    }
  } else {
    switch (lastNum) {
      case '0':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        return centuryNum + 'th';
      case '2':
        return centuryNum + 'nd';
      case '3':
        return centuryNum + 'rd';
      case '1':
        return centuryNum + 'st';
    }
  }
};

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"