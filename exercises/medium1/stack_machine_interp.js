//input:  string of commands
//output: result of the commands
//rules:
//  - long list of rules
//  - initialize stack to the values of [] and 0 respectively
//data struct: arrays
//alg: convert string to array
//  check if value of arrays are included in list of commands or if it is a number
//  initialize empty register and stack
//    0 and [] respectively
//  loop through array
//  create switch structure of cases
//    case number
//      set equal to register
//    case push
//      push number register to stack
//    case mult
//      pop number from stack and multiply to register value
//      store value in register
//    case print
//      print the register value
//    case add
//      Pop a value from the stack and add it to the register value, 
//      storing the result in the register
//    ...


const commands = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP', 'PRINT'];

let minilang = commandList => {
  commandList = commandList.split(' ');
  if (commandList.every(command => !commands.includes(command) && 
    typeof command !== 'number')) {
      console.log('Invalid Command');
      return;
  }
  
  let register = 0;
  let stack = [];
  commandList.forEach(ele => {
    switch (ele) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = register / stack.pop();
        register = parseInt(register);
        break;
      case 'MOD':
        register = register % stack.pop();
        register = parseInt(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(ele);
        break;
    }
    });
};

minilang('PRINT');

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)