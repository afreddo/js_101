function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length < 4 || dotSeparatedWords > 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

let isAnIpNumber = number => (number > 0 && number < 255);

console.log(isDotSeparatedIpAddress('4.5.5.47'));