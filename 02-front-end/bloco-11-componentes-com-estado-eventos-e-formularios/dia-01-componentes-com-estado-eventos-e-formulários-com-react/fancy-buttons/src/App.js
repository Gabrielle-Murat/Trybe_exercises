import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleFirstButton = this.handleFirstButton.bind(this);
    this.handleSecondButton = this.handleSecondButton.bind(this);
    this.handleThirdButton = this.handleThirdButton.bind(this);
  }

  handleFirstButton(event) {
    return console.log(event.target.innerText);
  }

  handleSecondButton(event) {
    return console.log(event.target.innerText);
  }

  handleThirdButton(event) {
    return console.log(event.target.innerText);
  }

  render() {
    return (
      <section className="buttons">
        <button className='first-button' onClick={this.handleFirstButton}>Olá Belle!</button>
        <button className='second-button' onClick={this.handleSecondButton}>Tudo bem?</button>
        <button className='third-button' onClick={this.handleThirdButton}>Parabéns pela conclusão do módulo de fundamentos web!</button>
      </section>
    )
  }
}

export default App;
