import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clickNumber: 0
    }

    this.handleButtons = this.handleButtons.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleButtons(event) {
    return console.log(event.target.innerText);
  }

  handleButtonClick = () => {
    this.setState((previousState) => ({
      clickNumber: previousState.clickNumber + 1
    }));
  }

  handleClick = (event) => {
    this.handleButtons(event);
    this.handleButtonClick();
  }

  render() {
    return (
      <section className="buttons">
        <button className='button' onClick={(event) => this.handleClick(event)}>Olá Belle!</button>
        <button className='button' onClick={(event) => this.handleClick(event)}>Tudo bem?</button>
        <button className='button' onClick={(event) => this.handleClick(event)}>Parabéns pela conclusão do módulo de fundamentos web!</button>
        <button className='button' onClick={this.handleButtonClick}>{this.state.clickNumber}</button>
      </section>
    )
  }
}

export default App;
