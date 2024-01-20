import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){ // o constructor pode ser removido e o super(props) também
    super(props);

    this.state = { // o state é um objeto
      name: 'Matheus Roger',
      counter: 0
    };
  }

  handleClick = () => { // usando arrow function para não precisar fazer o bind
    this.setState({ name: 'Pesarini' });
  }

  handleAClick = (event) => {
    event.preventDefault(); // previne que o link seja aberto ao clicar
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
