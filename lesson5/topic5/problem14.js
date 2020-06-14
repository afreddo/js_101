let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let solution = [];

for (let name in obj) {
  if (obj[name].type === 'fruit') {
    solution.push(obj[name].colors);
  } else {
    solution.push(obj[name].size.toUpperCase());
  }
}

console.log(solution);

console.log(Object.values(obj));