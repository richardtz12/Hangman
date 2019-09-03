import React, { Component } from 'react';
import { Row, Container, Col, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

import '../App.css';

// Used for Get Requests from Server
import axios from 'axios';

export default class ScoreBoard extends Component {
    constructor() {
        super();
        this.state = {
            values_arr: [],
        }
    }

    // Helper function that populates the table
    populateTable = () => {
        axios.get("http://localhost:5000/hangman/get_scoreboard", {})
             .then((res) => {
                 return (
                     Object.keys(res.data.values).map((item) => (
                         <tr>
                             <td> { item } </td>
                             <td> { item.win_count } </td>
                             <td> { item.loss_count } </td>
                         </tr>
                     ))
                 );
              });
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2> Score Board </h2>
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th> Player Name </th>
                                <th> Wins </th>
                                <th> Loss </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td> Rahul </td>
                                <td> 0 </td>
                                <td> 0 </td>
                            </tr>
                            { this.populateTable()}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}
