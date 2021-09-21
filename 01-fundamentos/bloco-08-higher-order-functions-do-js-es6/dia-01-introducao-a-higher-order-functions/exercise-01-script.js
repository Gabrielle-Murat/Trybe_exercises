function employeeInfo(name) {
  return {
    nomeCompleto: name,
    email: `${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '_')}@trybe.com`,
  }
}
// console.log(employeeInfo('Pedro Guerra'));

const newEmployees = (employeeInfo) => {
  const employees = {
    id1: employeeInfo('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeInfo('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeInfo('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeeInfo));
