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
                 console.log(res.data.values)
                 var keyList = Object.keys(res.data.values)
                 var keyListLength = (Object.keys(res.data.values).length)
                 var i = 0;
                 for (i = 0; i < keyListLength; i++) {
                    var user = keyList[i]
                    var loss_count = (res.data.values[keyList[i]].loss_count)
                    var win_count =  (res.data.values[keyList[i]].win_count)
                    var table = document.getElementById("myTable");
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    cell1.innerHTML = user;
                    cell2.innerHTML = win_count;
                    cell3.innerHTML = loss_count;
                 }

                //  return (
                //      Object.keys(res.data.values).map((value) => (
                //          <tr>
                //              <td> { value } </td>
                //              <td> { value.win_count } </td>
                //              <td> { value.loss_count } </td>
                //          </tr>
                //      ))
                //  );
              });
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2> Score Board </h2>
                </Row>
                <Row>
                    <Table id = "myTable">
                        <thead>
                            <tr>
                                <th> Player Name </th>
                                <th> Wins </th>
                                <th> Loss </th>
                            </tr>
                        </thead>

                        <tbody>
                            { this.populateTable()}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}
