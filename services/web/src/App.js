import React, { Component } from 'react';
import { Row, Container, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import PropTypes from 'prop-types';

import './App.css';

import HangmanSingle from './components/HangmanSingle';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            isLogin: true,
            isSinglePlayer: false,
            isHangmanSingle: false,
            playerOne: '',
            platerTwo: '',
        }
    }

    handleChange = event => {
        this.setState({ playerOne: event.target.value })
    };

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
                        isHangmanSingle: false,
                     });
    }

    // Populates Code for Single Player
    populateSinglePlayer = () => {
        return (
            <div className='form-center'>
               <Form>
                   <FormGroup>
                       <Label for="player_one"> Player 1 </Label>
                       <Input
                            name="player_one"
                            id="player_one"
                            onChange={this.handleChange}
                            placeholder="Enter Name"
                        />
                   </FormGroup>

                   <Button onClick={this.hangmanSingle}> Submit </Button>
               </Form>
             </div>
        );
    }

    hangmanSingle = () => {
        this.setState({
                        isSinglePlayer: false,
                        isLogin: false,
                        isHangmanSingle: true,
                     })
    }

    populateIntroSingle = () => {
        return (
                <h2> Welcome to Hangman {this.state.playerOne} ! </h2>
        );
    }

    render() {
        return (
          <div className='center'>
              <Container xs={12} m={12}>
                  <Row>
                      <div className='header'>
                          <h1> Hangman App</h1>
                      </div>
                  </Row>

                  <Row>
                    <div className='login-center'>
                        { this.state.isLogin ? this.loginPage() : '' }
                    </div>
                  </Row>

                  <Row>
                    { this.state.isSinglePlayer ? this.populateSinglePlayer() : '' }
                  </Row>

                  <Row>
                    { this.state.isHangmanSingle ? this.populateIntroSingle() : '' }
                    { this.state.isHangmanSingle ? <HangmanSingle /> : ''}
                  </Row>
             </Container>
          </div>
        );
    }
}
