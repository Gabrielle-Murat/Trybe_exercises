function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1- O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//1.1- Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day.
//1.2- Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.
//1.3- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function handleCalendarDayCreation() {
  let daysList = document.getElementById('days');
  for (let index in dezDaysList) {
    let dayNumber = dezDaysList[index];
    let day = document.createElement('li');
    day.innerText = dayNumber;
    day.className = 'day';

    if (dayNumber === 24 || dayNumber === 25 || dayNumber === 31) {
      day.classList.add('holiday');
    }

    if (dayNumber === 4 || dayNumber === 11 || dayNumber === 18 || dayNumber === 25) {
      day.classList.add('Friday-then!');
    }

    daysList.appendChild(day);
  }
}

handleCalendarDayCreation();

//2- Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//2.1- Adicione a este botão a ID "btn-holiday".
//2.2- Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createHolidayButton(string) {
  let button = document.createElement('button');
  let div = document.getElementsByClassName('buttons-container');
  button.innerText = string;
  button.id = 'btn-holiday';

  div[0].appendChild(button);
}

createHolidayButton('Feriados');

//3- Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
//3.1- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".


//4- Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//4.1- Adicione a este botão o ID "btn-friday".
//4.2- Adicione este botão como filho/filha da tag <div> com classe "buttons-container".


//5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//5.1- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.


//6- Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//6.1 Dica - Propriedade: event.target .


//7- Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//7.1- O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


//8- Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//8.1- O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//8.2- O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


//9- Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
//9.1- Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.


//10- Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).


//11 (BÔNUS)- Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//11.1- Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//11.2- Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//11.3- Dica - Propriedade: keyCode.