import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [responseOut, setResponseOut] = useState("");



  const handleSubmitV3 = event => {
    event.preventDefault();
    fetch("")
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.text();
    })
    .then(data => {
      setResponseOut(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setResponseOut("Error fetching data");
    });
  }
  

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

          <p>{responseOut}</p>
          <button onClick={handleSubmitV1}>Submit</button>
          <button onClick={handleSubmitV2}>Submit</button>
          <button onClick={handleSubmitV3}>Submit</button>
          <button onClick={handleSubmitV4}>Submit</button>
      </header>
    </div>
  );
}

export default App;
