import React, { Component } from 'react';
import { Row, Container, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import PropTypes from 'prop-types';

import './App.css';

import HangmanSingle from './components/HangmanSingle';
import ScoreBoard from './components/ScoreBoard';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            isLogin: true,
            isSinglePlayer: false,
            isHangmanSingle: false,
            isScoreBoard: false,
            playerOne: '',
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

                <br />

                <Row>
                    <div className='button-align'>
                        <Button color="primary" size="lg" onClick={this.scoreBoard}> ScoreBoard </Button>
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
                        isScoreBoard: false,
                     });
    }

    // Populates Code for Single Player
    populateSinglePlayer = () => {
        return (
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

               <br />
               <br />

               { this.populateBackButton() }

           </Form>
        );
    }

    hangmanSingle = () => {
        this.setState({
                        isSinglePlayer: false,
                        isLogin: false,
                        isHangmanSingle: true,
                        isScoreBoard: false,
                     })
    }

    populateIntroSingle = () => {
        return (
                <h2> Welcome to Hangman {this.state.playerOne} ! </h2>
        );
    }

    scoreBoard = () => {
        this.setState({
                        isScoreBoard: true,
                        isSinglePlayer: false,
                        isLogin: false,
                        isHangmanSingle: false,
                      })
    }

    populateBackButton = () => {
        return (
            <Row>
                <div className='button-align'>
                    <Button color="primary" size="lg" onClick={this.backButton}> Back </Button>
                </div>
            </Row>
        );
    }

    backButton = () => {
        this.setState({
                        isScoreBoard: false,
                        isSinglePlayer: false,
                        isLogin: true,
                        isHangmanSingle: false,
                      })
    }

    render() {
        return (
          <div className='centered'>
              <Container>
                  <Row>
                    <Col>
                        <h1> Hangman App </h1>
                    </Col>
                  </Row>

                  <br />
                  <br />
                  <br />

                  <Row>
                    <Col>
                        { this.state.isLogin ? this.loginPage() : '' }
                    </Col>
                  </Row>

                  <Row>
                    { this.state.isSinglePlayer ? this.populateSinglePlayer() : '' }
                  </Row>

                  <Row>
                    { this.state.isHangmanSingle ? this.populateIntroSingle() : '' }
                    { this.state.isHangmanSingle ? <HangmanSingle playerOne = {this.state.playerOne} /> : ''}
                    { this.state.isHangmanSingle ? this.populateBackButton() : ''}
                  </Row>

                  <Row>
                    { this.state.isScoreBoard ? <ScoreBoard /> : '' }
                    { this.state.isScoreBoard ? this.populateBackButton() : ''}
                  </Row>
             </Container>

          </div>
        );
    }
}
