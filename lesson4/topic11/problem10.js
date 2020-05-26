let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};



let ageEach = Object.values(ages);
let min = ageEach[0];
for (let i = 1; i < ageEach.length; i++) {
  if (ageEach[i] < min) {
    min = ageEach[i];
  }
}

console.log(min);