import React, { Component } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';

import './App.css';

import SingleName from './components/SingleName';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            isSinglePlayer: false,
            isLogin: true,
            playerOne: '',
            platerTwo: '',
        }
    }

    singlePlayer = () => {

        console.log("Single Player Button ...");

        this.setState({
                        isSinglePlayer: true,
                        isLogin: false,
                     });
    }

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
                      <Button color="primary" size="lg" onClick={this.singlePlayer}> Single Player </Button>
                  </div>
              </Row>

              <Row>
                  <div className='button-align'>
                      <Button color="primary" size="lg"> Multi Player </Button>
                  </div>
              </Row>
                    {this.state.isSinglePlayer ? <SingleName /> : '' }
              <Row>

              </Row>


          </Container>
        );
    }
}
