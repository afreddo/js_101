//input:  string
//output: return true if parentheses are in matching pairs, false else
//data struct: string
//alg:
//  find how many ')' are in the string
//  find how many '(' are in the string
//  if there are the same amoount of both return true
//  else false

let isBalanced = string => {
    let leftside = string.match(/\(/g); 
    let rightside = string.match(/\)/g);
    if ((leftside === null && rightside !== null) || (leftside !== null && rightside === null)) return false;
    if(leftside === rightside) return true;
        
  while (string.match(/\(/g) !== null) {
    leftside = string.match(/\(/g); 
    rightside = string.match(/\)/g);
    if ((leftside === null && rightside !== null) || (leftside !== null && rightside === null)) return false;
    if(leftside === rightside) return true;
    if (leftside.length !== rightside.length) return false;
    
    let idxLeftside = string.match(/\(/).index;

    let idxRightside = string.match(/\)/).index;

    if (idxRightside < idxLeftside) return false;
    string = string.replace(/\(/, ' ');
    string = string.replace(/\)/, ' ');
    console.log(string);

  }
  return true;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);