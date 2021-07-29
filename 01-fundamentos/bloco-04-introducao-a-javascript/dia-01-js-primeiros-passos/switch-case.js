let resultado = 'lista';

switch (resultado) {
  case 'aprovada': 
    console.log('Parabéns, você foi aprovado');
    break;

  case 'lista': 
    console.log('Você está na lista de espera');
    break;

  case 'reprovada': 
    console.log('Você foi reprovado');
    break;

  default:
    console.log('Não foi possível consultar seu resultado.');
}