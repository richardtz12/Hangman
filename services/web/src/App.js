import React, { Component } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';

import PropTypes from 'prop-types';

import './App.css';

import SingleName from './components/SingleName';
import HangmanSingle from './components/HangmanSingle';

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

    // Basic Buttons for Login Page
    loginPage = () => {
        return (
            <Container>
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
            </Container>
        );
    }

    // Single Player
    singlePlayer = () => {
        this.setState({
                        isSinglePlayer: true,
                        isLogin: false,
                     });
    }

    render() {
        return (
          <Container>
              <HangmanSingle/> 
              <Row>
                  <div className='header'>
                      <h1> Hangman App</h1>
                  </div>
              </Row>

              {/* { this.state.isLogin ? this.loginPage() : '' } */}

              <Row>
                 {/* { this.state.isSinglePlayer ? <SingleName /> : '' } */}
              </Row>


          </Container>
        );
    }
}
