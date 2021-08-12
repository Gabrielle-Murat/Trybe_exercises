const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

//1- Copie esse arquivo e edite apenas ele;
// 2- Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1- Deve existir apenas um elemento com a classe 'tech'.

function handleTechClass(event) {
  let listaTechClass = document.querySelector('.tech');
  listaTechClass.classList.remove('tech');
  event.target.classList.add('tech');
}

firstLi.addEventListener('mouseover', handleTechClass);
secondLi.addEventListener('mouseover', handleTechClass);
thirdLi.addEventListener('mouseover', handleTechClass);

//3- Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

function handleTechClassInnerText() {
  let inputText = document.getElementById('input').value;
  let techElement = document.getElementsByClassName('tech');
  techElement[0].innerText = inputText;
}

input.addEventListener('keyup', handleTechClassInnerText);

//4- Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
//4.1- Que tal redirecionar para seu portifólio?

function handleTop3Redirect() {
  window.location.replace('https://github.com/Gabrielle-Murat/gabrielle-murat.github.io');
}

myWebpage.addEventListener('dblclick', handleTop3Redirect);

//5- Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

function handleTop3ColorOver() {
  let top3 = document.getElementById('my-spotrybefy');
  top3.style.color = 'pink';
}

function handleTop3ColorOut() {
  let top3 = document.getElementById('my-spotrybefy');
  top3.style.color = 'white';
}

myWebpage.addEventListener('mouseover', handleTop3ColorOver);
myWebpage.addEventListener('mouseout', handleTop3ColorOut);