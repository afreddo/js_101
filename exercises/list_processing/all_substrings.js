//input:  string
//output: return array of all substrings
//rules:
//  -order by where string in substring begins
//  -order substrings starting from same index according to size (small->large)
//data struct: arrays/strings
//alg:
//  create empty array
//  create array with the first iteration removed during each progressive step
//  iterate through the array
//    apply SUBSTRINGATSTART to each element and save to new array
//  return new array


let substringsAtStart = string => {
  let array = string.split('');

  let newArray = array.map((ele, idx, idxArray) => {
    return idxArray.join('').substring(0,idx+1);
  })
  
  return newArray.sort((str1, str2) => str1.length - str2.length);
};

let substrings = string => {
  let bigArray = [];
  
  let arrayTrunc = string.split('').map((ele, idx) => string.substring(idx));
  arrayTrunc.forEach(ele => {
    bigArray.push(...substringsAtStart(ele))
    });
  return bigArray;
}

console.log(substrings('abcde'));