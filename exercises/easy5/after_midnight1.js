//input:  positive of negative number showing time before or after midnight
//output:  return the time of day in hh:mm format
//data struct: numbers
//alg:
//  set constant minutes in a day 24*60;
//  add minutes to time of day
//  time in hours = divide minutes by 60
//  hh = time in hours rounded down 
//  ss = (time in hours - hh) * 60;
//  return hh + ':' + ss
const MIN_IN_DAY = 24*60;

let timeOfDay = difference => {
  
  while (Math.sqrt(difference**2) >= MIN_IN_DAY) {
    (Math.sqrt(difference**2) === difference) ?  difference -= MIN_IN_DAY : difference += MIN_IN_DAY;
  }
  
   
  let time = MIN_IN_DAY + difference;
  if (difference >= 0) time -= MIN_IN_DAY;
  let timeHours = time / 60;
  
  let hh = Math.floor(timeHours);
  let ss = Math.round((timeHours - hh) * 60);
  hh = String(hh).padStart(2,'0');
  ss = String(ss).padStart(2,'0');
  return (hh + ':' + ss);
};

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");