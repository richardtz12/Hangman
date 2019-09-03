import React, { Component } from 'react';
import { Row, Container, Col, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

import '../App.css';

export default class ScoreBoard extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // Helper function that populates the table
    // populateTable = () => {
    //
    // }

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
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}
