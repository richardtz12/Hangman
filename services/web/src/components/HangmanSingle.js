import React, { PureComponent } from 'react';
import { Row, Container, Col, Button, ButtonGroup } from 'reactstrap';

import '../css/HangmanSingle.css';

export default class HangmanSingle extends PureComponent {
    constructor() {
        super();

        this.state = {

        };
    }

    populateLetters = () => {
        var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                        'W', 'X', 'Y', 'Z'];

        var alphabetList = alphabet.map(function(apb) {
                                        return (<Button>{apb}</Button>);
                                    });

        console.log(alphabetList);

        return { alphabetList }
    }

    render() {
        return (
            <Container>
                // Hangman Icon
                <Row>

                </Row>

                // Letters
                <Row>
                    <ButtonGroup>
                        {this.populateLetters()}
                    </ButtonGroup>
                </Row>

            </Container>
        );
    }
}
