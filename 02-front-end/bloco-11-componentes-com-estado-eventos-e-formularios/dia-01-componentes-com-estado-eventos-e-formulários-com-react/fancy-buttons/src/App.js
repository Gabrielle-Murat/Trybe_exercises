import React from 'react';
import './App.css';

function handleFirstButton(event) {
  return console.log(event.target.innerText);
}

function handleSecondButton(event) {
  return console.log(event.target.innerText);
}

function handleThirdButton(event) {
  return console.log(event.target.innerText);
}

class App extends React.Component {
  render() {
    return (
      <section className="buttons">
        <button className='first-button' onClick={handleFirstButton}>Olá Belle!</button>
        <button className='second-button' onClick={handleSecondButton}>Tudo bem?</button>
        <button className='third-button' onClick={handleThirdButton}>Parabéns pela conclusão do módulo de fundamentos web!</button>
      </section>
    )
  }
}

export default App;
