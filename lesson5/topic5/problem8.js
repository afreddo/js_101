let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jUmped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(ele => ele.forEach(ele2 => ele2.split('')
  .forEach(ele3 => {
    if (/a|e|i|o|u/i.test(ele3)) {
      console.log(ele3);
    }
  })));
