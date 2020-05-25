//input:  time of day in 24 hour format
//Output: return the time of day in minutes before or after midnight
//data struct: numbers
//alg:
//  before midnight
//    seperate string into array with [hh,mm]
//    convert into single time in minutes
//    subtract minutes in day from total minutes
//    return rounded answer
//  after midnight
//    seperate string into array with [hh,mm]
//    convert into single time in minutes
//    subtract total minutes from minutes in day
//    return rounded answer

const MIN_IN_DAY = 24*60;
const MIN_IN_HOUR = 60;

let beforeMidnight = time => {
  let timeArray = time.split(':');
  let minutes = Number(timeArray[0]) * MIN_IN_HOUR + Number(timeArray[1]);
  if (minutes === 0) minutes = MIN_IN_DAY;
  return Math.round(MIN_IN_DAY - minutes);
}

let afterMidnight = time => {
  let timeArray = time.split(':');
  let minutes = Number(timeArray[0]) * MIN_IN_HOUR + Number(timeArray[1]);
  if (minutes === MIN_IN_DAY) minutes -= MIN_IN_DAY;
  return Math.round(minutes);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);