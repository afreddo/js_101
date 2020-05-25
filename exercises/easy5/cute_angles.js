//input:  floating point number representing angle between 0 - 360 degrees
//output:  string representing that angle in degrees, minutes, and seconds
//data struct: numbers
//alg:
//  convert number into three parts degree, minutes, seconds
//  return string with number amounts

let dms = number => {
  let degrees = Math.floor(number);
  let minutes = Math.floor((number - degrees) * 60);
  let seconds = Math.floor((((number - degrees) * 60) - minutes) * 60);
  return `${String(degrees)}*${String(minutes)}'${String(seconds)}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"