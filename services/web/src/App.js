<<<<<<< HEAD
import React, { Component } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';

import './App.css';

// import SingleName from './SingleName';


export default class App extends Component {
    render() {
        return (
          <Container>
              <Row>
                  <div className='header'>
                      <h1> Hangman App </h1>
                  </div>
              </Row>

              <Row>
                  <div className='button-align'>
                      <Button color="primary" size="lg"> Single Player </Button>
                  </div>
              </Row>

              <Row>
                  <div className='button-align'>
                      <Button color="primary" size="lg"> Multi Player </Button>
                  </div>
              </Row>
          </Container>
        );
    }
}
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
      </header>
    </div>
  );
}

export default App;
>>>>>>> 2b994c5b079e2d43aab95f744d123aa463275afb
