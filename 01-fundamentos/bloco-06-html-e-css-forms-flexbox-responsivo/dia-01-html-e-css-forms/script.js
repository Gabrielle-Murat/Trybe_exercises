const statesArray = ['São Paulo', 'Mato Grosso', 'Bahia', 'Minas Gerais', 'Goiás', 'Ceará', 'Rio Grande do Sul', 'Paraná', 'Santa Catarina', 'Pernambuco', 'Pará', 'Amazonas', 'Espírito Santo', 'Piauí', 'Sergipe', 'Paraíba', 'Maranhão', 'Mato Grosso do Sul', 'Rio de Janeiro', 'Alagoas', 'Rio Grande do Norte', 'Acre', 'Tocantins', 'Rondônia', 'Roraima', 'Amapá'];
const stateSelect = document.getElementById('input-state');
const submitButton = document.getElementById('submit');
const eraseButton = document.getElementById('erase');
const finalResponse = [];

//Organizar o array de estados por ordem alfabética: utilizei a mesma função que já havia escrito no challenges2.js do projeto Playground Functions
function handleStatesArrayOrder(statesArray) {
  return statesArray.sort();
}

function handleStateCreation() {
  const orderedStateArray = handleStatesArrayOrder(statesArray);
  const statesArrayLength = orderedStateArray.length;
  for (let index = 0; index < statesArrayLength; index += 1) {
    const stateOption = document.createElement('option');
    stateOption.setAttribute('required', '');
    stateOption.innerText = orderedStateArray[index];
    stateSelect.appendChild(stateOption);
  }
}

function checkName() {
  var response;
  const name = document.getElementById('input-name').value;
  if (name === '') {
    response = 'Nome inválido.';
  } else {
    response = 'Nome: ' + name;
  }
  finalResponse.push(response);
}

function checkEmail() {
  var response;
  const email = document.getElementById('input-email').value;
  if (email === '') {
    response = 'Email inválido.';
  } else {
    response = 'Email: ' + email;
  }
  finalResponse.push(response);
}

function checkCpf() {
  var response;
  const cpf = document.getElementById('input-cpf').value;
  if (cpf === '') {
    response = 'CPF inválido.';
  } else {
    response = 'CPF: ' + cpf;
  }
  finalResponse.push(response);
}

function checkAdress() {
  var response;
  const adress = document.getElementById('input-adress').value;
  if (adress === '') {
    response = 'Endereço inválido.';
  } else {
    response = 'Endereço: ' + adress;
  }
  finalResponse.push(response);
}

function checkCity() {
  var response;
  const city = document.getElementById('input-city').value;
  if (city === '') {
    response = 'Cidade inválida.';
  } else {
    response = 'Cidade: ' + city;
  }
  finalResponse.push(response);
}

function checkState() {
  var response;
  const state = document.getElementById('input-state').value;
  if (state === '') {
    response = 'Estado inválido.';
  } else {
    response = 'Estado: ' + state;
  }
  finalResponse.push(response);
}

function checkComplement() {
  var response;
  const house = document.getElementById('input-house').checked;
  const apt = document.getElementById('input-apartment').checked;
  if (house === true) {
    response = 'Complemento: casa';
  } else if (apt === true) {
    response = 'Complemento: apartamento';
  } else {
    response = 'Complemento inválido, marque uma opção.';
  }
  finalResponse.push(response);
}

function checkAbstract() {
  var response;
  const abstract = document.getElementById('abstract').value;
  if (abstract === '') {
    response = 'Resumo inválido.';
  } else {
    response = 'Resumo: ' + abstract;
  }
  finalResponse.push(response);
}

function checkJob() {
  var response;
  const role = document.getElementById('role').value;
  if (role === '') {
    response = 'Cargo inválido.';
  } else {
    response = 'Cargo: ' + role;
  }
  finalResponse.push(response);
}

function checkJobDescription() {
  var response;
  const description = document.getElementById('role-description').value;
  if (description === '') {
    response = 'Descrição inválida.';
  } else {
    response = 'Descrição: ' + description;
  }
  finalResponse.push(response);
}

function getDateInput() {
  const initDateText = document.getElementById('initiation-date').value;
  return initDateText;
}

function checkDay(initDateText) {
  const day = parseInt(initDateText[0] + initDateText[1]);
  var response = 'ok';
  if (day < 1 || day > 31) {
    response = alert('Dia inválido!');
  } 
  return response;
}

function checkMonth(initDateText) {
  // const initDateText = getDateInput();
  const month = parseInt(initDateText[3] + initDateText[4]);
  var response = 'ok';
  if (month < 1 || month > 12) {
    response = alert('Mês inválido!');
  } 
  return response;
}

function checkYear(initDateText) {
  // const initDateText = getDateInput();
  const year = parseInt(initDateText[6] + initDateText[7] + initDateText[8] + initDateText[9]);
  var response = 'ok';
  if (year < 1900) {
    response = alert('Ano inválido!');
  } 
  return response;
}

function checkDateOutput(initDateText) {
  // const initDateText = getDateInput();
  const output = initDateText[2] + initDateText[5];
  var response = 'ok';
  for (let index = 0; index < output.length; index += 1) {
    if (output[index] !== '/') {
      response = alert('Formato inválido! Utilize / entre dia, mês e ano.');
    } 
    return response;
  }
}

function checkInitDateInput() {
  var response;
  const initDateText = getDateInput();
  let day = checkDay(initDateText);
  let month = checkMonth(initDateText);
  let year = checkYear(initDateText);
  let output = checkDateOutput(initDateText);
  
  if(day === 'ok' && month === 'ok' && year === 'ok' && output === 'ok') {
    response = 'Data de início: ' + initDateText;
  }
  finalResponse.push(response);
}

function eraseFinalResponse() {
  const ul = document.getElementById('final-response');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function checkForm() {
  checkName();
  checkEmail();
  checkCpf();
  checkAdress();
  checkCity();
  checkState();
  checkComplement();
  checkAbstract();
  checkJob();
  checkJobDescription();
  checkInitDateInput();

  let ul = document.getElementById('final-response');
  eraseFinalResponse();

  for (let index = 0; index < finalResponse.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = finalResponse[index];
    ul.appendChild(li);
  }
}

function handleFlowInterruption(event) {
  event.preventDefault();
  checkForm();
}

function eraseForm() {
  let form = document.getElementById('form');
  form.reset();
  eraseFinalResponse();
}

window.onload = function createPage() {
  handleStateCreation();
  submitButton.addEventListener('click', handleFlowInterruption);
  eraseButton.addEventListener('click', eraseForm);
}