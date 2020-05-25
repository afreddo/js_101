//input: array
//output: count number of occurences of each element in array
//    log to console each element along number of occurences
// data struct arrays
//alg:
//  create counter function
//    loop through vehicles and add 1 for each time the element is repeated
//    return element count
//  create unique name functio
//    create unique array
//    iterate through given array
//      if unique array does not include current element
//        add current element to unique array
//    return unique array
//    create unique array
//    iterate through unique array
//      call count on each element in unique array
//      log unique array element name and count result

let uniqueArray = array => {
  let arrayUnique = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (!arrayUnique.includes(array[idx])) arrayUnique.push(array[idx]);
  }
  return arrayUnique;
};

let counter = (element, array) => {
  let count = 0;
  array.forEach(ele => {
    if (ele === element) count += 1;
  });
  return count;
};

let countOccurences = array => {
  let nameArray = uniqueArray(array);
  nameArray.forEach(ele => {
    let count = counter(ele,array);
    console.log(`${ele} => ${count}`);
    });
};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurences(vehicles);
