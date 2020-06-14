let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let ageTotal = Object.entries(munsters).map(ele => ele[1].age)
  .reduce((value, age) => value + age, 0);

console.log(ageTotal);