let numbers = [];
for (let valor = 1; valor <= 25; valor += 1) {
  numbers.push(valor);
}

let numbersDivision = [];
for (let index = 0; index < numbers.length; index += 1) {
  let division = numbers[index] / 2;
  numbersDivision.push(division);
}

console.log(numbersDivision);