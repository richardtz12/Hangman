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
