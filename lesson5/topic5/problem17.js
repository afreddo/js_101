const SEPARATORS = [8, 13, 18, 23, 36];

let association = {
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f'
};

let uniqueNum = () => {
  let randNum = Math.floor(Math.random()*16);
  if (randNum > 9) return association[randNum];
  return randNum;
};

let IDBuilder = () => {
  let ID = '';
  for (let i = 0; i < 36; i++) {
    if (SEPARATORS.includes(i)) {
      ID += '-';
      continue;
    }
    ID += uniqueNum();
  }
  console.log(ID);
};

IDBuilder();




