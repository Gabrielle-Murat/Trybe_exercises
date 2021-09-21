let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
  let valorAtual = numbers[index]; //poderia colocar numbers[index] direto no if, mas assim fica mais claro
  if (valorAtual > maiorValor) {
    maiorValor = valorAtual;
  }
}

console.log(maiorValor);