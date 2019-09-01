import React, { Component } from 'react';
import './App.css';
import {
  Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';


class App extends Component {
    state = {
        contacts: []
    }

    // componentDidMount() {
    //
    // }

    render() {
        return (
            <Row>
                <div align='center'>
                    <h1>
                        Welcome to HangMan
                    </h1>
                </div>
            </Row>

            <Row>
                <Button color="primary">primary</Button>
            </Row>
        );
    }
}


export default App;
