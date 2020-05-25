let munstersDescription = "The Munsters are creepy and spooky.";

let array = [];
for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i].match(/[a-z]/g)) {
    array.push(munstersDescription[i].toUpperCase());
  } else {
    array.push(munstersDescription[i].toLowerCase());
  }
}
console.log(array.join(''));