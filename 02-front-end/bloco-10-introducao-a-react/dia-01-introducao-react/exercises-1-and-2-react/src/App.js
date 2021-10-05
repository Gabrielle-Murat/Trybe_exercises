import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar Café', 'Cuidar do Pitico', 'Almoçar', 'Estudar', 'Tomar Banho', 'Dormir'];

class App extends React.Component {
  render() {
    return (
      tasks.map((task) => Task(task))
    )
  }
}

export default App;
