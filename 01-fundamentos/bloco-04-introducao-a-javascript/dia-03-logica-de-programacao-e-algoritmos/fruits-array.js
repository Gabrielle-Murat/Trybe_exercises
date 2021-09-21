let fruits = [3, 4, 10, 1, 12];

//percorrer todo o array

//somar todos os valores durante a varredura
let soma = 0;
for (let index = 0; index < fruits.length; index += 1) {
  soma += fruits[index];
}

//verificar o valor final da soma

//comparar o valor final com 15

//caso seja maior, imprimir o valor

//caso seja menor ou igual, imprimir uma mensagem

if (soma > 15) {
  console.log('O valor da soma é ' + soma + '.');
} else {
  console.log('Valor menor que 16.');
}