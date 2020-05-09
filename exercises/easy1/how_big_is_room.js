// input: length and width of room in meters from user
// output: logs area of room to console in ft2 and m2
// test: area(2,2); 4 (40 something)
// test: area(0,0); invalid answer
// test: area(-1,-1); invalid answer
let input = require('readline-sync');

const LENGTH = input.prompt('What is the length of the room? (m)');
const WIDTH = input.prompt('What is the width of the room? (m)');


let areaMeters = LENGTH * WIDTH;
let areaFeet = areaMeters * 10.7639;

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);

