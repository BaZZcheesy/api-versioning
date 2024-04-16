import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      num1 : "",
      num2 : ""
    };
  }

  handleChangeNum1 = event => {
    this.setState({ num1: event.target.value });
  }

  handleChangeNum2 = event => {
    this.setState({ num2: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <form onSubmit="">
            <input type="number" value={this.state.num1} onChange={this.handleChangeNum1} />
            <input type="number" value={this.state.num2} onChange={this.handleChangeNum2} />
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    )
  }
}

export default App;
