//input: three numbers
//output: grade associated with the three numbers (string)
//  Rules:
//    <grades>
//data struct: numbers => strings
//alg:
//  take average of three numbers
//  conditionals to determine the letter to assign to the average
//  return letter

let getGrade = (num1, num2, num3) => {
  let avg = (num1 + num2 + num3)/3;
  if (avg >= 90 && avg <= 100) {
    return 'A';
  } else if (avg >= 80 && avg < 90) {
    return 'B';
  } else if (avg >= 70 && avg < 80) {
    return 'C';
  } else if (avg >= 60 && avg < 70) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"