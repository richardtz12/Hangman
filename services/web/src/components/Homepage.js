import React, { Component } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';

import './App.css';

import SingleName from '../css/SingleName';


export default class HomePage extends Component {

    constructor() {
        super();
    }

    render() {
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
}
