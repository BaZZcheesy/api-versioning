import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [responseOut, setResponseOut] = useState("");

  const handleSubmitV1 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-VERSION": "1"
      },
    })
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

  const handleSubmitV2 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-VERSION": "2"
      },
    })
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

  const handleSubmitV3 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v1/hello")
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

  const handleSubmitV4 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v2/hello")
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
