import React, { Component } from 'react';
import { Row, Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../css/SingleName.css';

export default class SingleName extends Component {
    render() {
        return (
            <div className='form-center'>
                <Form>
                    <FormGroup>
                        <Label for="player_one"> Player 1 </Label>
                        <Input name="player_one" id="player_one" placeholder="Enter Name" onSubmit={(vals) => console.log(vals)} />
                    </FormGroup>

                    <Button> Submit </Button>
                </Form>
            </div>
        );
    }
}
