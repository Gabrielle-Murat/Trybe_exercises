const wakeUp = () => 'Acordando!!';

const haveCoffee = () => 'Bora tomar café!!';

const goToSleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
  const print = func();
  console.log(print);
}

doingThings(wakeUp);
doingThings(haveCoffee);
doingThings(goToSleep);
