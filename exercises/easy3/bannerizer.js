//input: string of text
//output: string of text surrounded by box
//  shape of box when input: ''
//  +--+
//  |  |
//  |  |
//  |  |
//  +--+
//data structure: strings
//alg:
//  form empty box in an array
//  take length of input string and loop through empty box to resize it
//  disp box and text to console

let logInBox = text => {
  let box = ['+','|', '--', '  '];
  for (let i = 0; i < text.length; i += 1) {
    box[2] = box[2].concat('-');
    box[3]= box[3].concat(' ');
  }
  console.log(box[0]+box[2]+box[0]);
  console.log(box[1]+box[3]+box[1]);
  console.log(box[1]+' '+text+' '+box[1]);
  console.log(box[1]+box[3]+box[1]);
  console.log(box[0]+box[2]+box[0]);
};  

logInBox('');
logInBox(' hamsters are cool ');