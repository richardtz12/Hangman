import React, { Component } from 'react';
import { Row, Container, Col, Button, ButtonGroup } from 'reactstrap';

import '../App.css';

import PropTypes from 'prop-types';

// Used for Get Requests from Server
import axios from 'axios';


var url="http://0.0.0.0:5000/hangman/get_word"

// this.setState({ refresh: true }, () => {
//   axios.get(url, { params })
//     .then((res) => {
//       this.setState({
//         tickerList: res.data.tickerList,
//         refresh: false,
//       });
//     });
// });

var numWrong = 0
var numRight = 0

export default class HangmanSingle extends Component {

    static propTypes = {
        playerOne: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            lettersVisible: false,
            word: '',
            wordArr: [],
        };
    }

    renderHangman = () =>  {
        axios.get(url, {})
             .then((res) => {
                    this.setState({
                        lettersVisible: true,
                        word: res.data.word,
                        wordArr: res.data.word_arr,
                    });
                    console.log(this.state);
              })
              .then(() => {
                  var x = this.state.word.length;
                  for (var i = 1; i < x + 1; i++) {
                      document.getElementById('letter'+ i).innerHTML = this.state.word[i - 1];
                      document.getElementById('letter'+ i).style.visibility = "hidden";
                      document.getElementById('underline'+i).style.display = "block";
                      document.getElementById('underline'+i).style.borderBottom = "3px solid black";
                  }
                  var ctx = document.getElementById("hangMan").getContext('2d');
                  ctx.fillStyle = "white";
                  ctx.lineWidth=3;
                  ctx.fillRect(0, 0, 300, 300);
                  ctx.beginPath(); //vertical bar
                      ctx.moveTo(50,270);
                      ctx.lineTo(50,25);
                      ctx.stroke();
                  ctx.beginPath(); //vertical bar long piece
                      ctx.moveTo(65,270);
                      ctx.lineTo(65,85);
                      ctx.stroke();
                  ctx.beginPath(); //vertical bar short piece
                      ctx.moveTo(65,64);
                      ctx.lineTo(65,40);
                      ctx.stroke();
                  ctx.beginPath(); //horizontal bar
                      ctx.moveTo(49,25);
                      ctx.lineTo(175,25);
                      ctx.stroke();
                  ctx.beginPath(); //horizontal bar short piece
                      ctx.moveTo(49,40);
                      ctx.lineTo(86,40);
                      ctx.stroke();
                  ctx.beginPath(); //horizontal bar long piece
                      ctx.moveTo(106,40);
                      ctx.lineTo(175,40);
                      ctx.stroke();
                  ctx.beginPath(); //small vertical bar
                      ctx.moveTo(173,25);
                      ctx.lineTo(173,40);
                      ctx.stroke();
                  ctx.beginPath(); //cross bar
                      ctx.moveTo(50,80);
                      ctx.lineTo(100,25);
                      ctx.stroke();
                  ctx.beginPath(); //cross bar
                      ctx.moveTo(60,90);
                      ctx.lineTo(111,35);
                      ctx.stroke();
                  ctx.beginPath(); //cross bar
                      ctx.moveTo(50,80);
                      ctx.lineTo(60,90);
                      ctx.stroke();
                  ctx.beginPath(); //cross bar
                      ctx.moveTo(100,25);
                      ctx.lineTo(111,35);
                      ctx.stroke();
                  ctx.beginPath(); //ground
                      ctx.moveTo(35,270);
                      ctx.lineTo(265,270);
                      ctx.stroke();
                  ctx.beginPath(); //noose
                      ctx.moveTo(150,40);
                      ctx.lineTo(150,80);
                      ctx.stroke();
              });
    }

    disableButton = (event) => {
        console.log(event)
        document.getElementById(event.target.value).disabled = true;
        var ctx = document.getElementById("hangMan").getContext('2d');
        var bool = true
        for (var i = 0; i < this.state.wordArr.length; i++) {
            if (this.state.wordArr[i] == event.target.value) {
                (document.getElementById('letter' + (i + 1))).style.visibility = "visible"
                bool = false
                numRight = numRight + 1
            }
        }
        if (numRight == this.state.wordArr.length) {

            var params = {
                            'playerName': this.props.playerOne,
                            'status': 'win',
                         }

            axios.get("http://0.0.0.0:5000/hangman/log_result", { params })
                 .then((res) => {
                        console.log(res.data.status);
                  });

            alert("Congratulations! You got the word!")


        }
        if (bool) {
            numWrong = numWrong + 1
        }
        if(numWrong==1){
            ctx.beginPath(); //head
                ctx.arc(150, 100, 20, 0, 2*Math.PI);
                ctx.stroke();
            ctx.beginPath(); //left eye
                ctx.arc(143, 95, 3.5, 0, 2*Math.PI);
                ctx.stroke();
            ctx.beginPath(); //right eye
                ctx.arc(157, 95, 3.5, 0, 2*Math.PI);
                ctx.stroke();
            ctx.beginPath(); //mouth
                ctx.arc(150, 103, 9, 0, Math.PI);
                ctx.stroke();
        }
        if(numWrong==2){
            ctx.beginPath(); //body
                ctx.moveTo(150,120);
                ctx.lineTo(150,190);
                ctx.stroke();
        }
        if(numWrong==3){
            ctx.fillStyle = "white";
            ctx.fillRect(138, 102, 24, 12); //cover mouth
            ctx.beginPath(); //straight mouth
                ctx.moveTo(140,108);
                ctx.lineTo(160,108);
                ctx.stroke();
            ctx.beginPath(); //right arm
                ctx.moveTo(150,135);
                ctx.lineTo(180,160);
                ctx.stroke();
        }
        if(numWrong==4){
            ctx.beginPath(); //left arm
                ctx.moveTo(150,135);
                ctx.lineTo(120,160);
                ctx.stroke();
        }
        if(numWrong==5){
            ctx.fillRect(138, 102, 24, 12); //cover mouth
            ctx.beginPath(); //sad mouth
                ctx.arc(150, 112, 9, 0, Math.PI, true);
                ctx.stroke();
            ctx.beginPath(); //right leg
                ctx.moveTo(149,188);
                ctx.lineTo(180,230);
                ctx.stroke();
        }
        if(numWrong==6){
            ctx.beginPath(); //left leg
                ctx.moveTo(151,188);
                ctx.lineTo(120,230);
                ctx.stroke();

                var params = {
                                'playerName': this.props.playerOne,
                                'status': 'lost',
                             }

                axios.get("http://0.0.0.0:5000/hangman/log_result", { params })
                     .then((res) => {
                            console.log(res.data.status);
                      });

                alert("You have Lost! Try again next time!")
        }
    }

    populateLetters = () => {
        return (
            <Container>
                <Button id="a" onClick= {this.disableButton} value = {"a"}>a</Button>
                <Button id="b" onClick= {this.disableButton} value = {"b"}>b</Button>
                <Button id="c" onClick= {this.disableButton} value = {"c"}>c</Button>
                <Button id="d" onClick= {this.disableButton} value = {"d"}>d</Button>
                <Button id="e" onClick= {this.disableButton} value = {"e"}>e</Button>
                <Button id="f" onClick= {this.disableButton} value = {"f"}>f</Button>
                <Button id="g" onClick= {this.disableButton} value = {"g"}>g</Button>
                <Button id="h" onClick= {this.disableButton} value = {"h"}>h</Button>
                <Button id="i" onClick= {this.disableButton} value = {"i"}>i</Button>
                <Button id="j" onClick= {this.disableButton} value = {"j"}>j</Button>
                <Button id="k" onClick= {this.disableButton} value = {"k"}>k</Button>
                <Button id="l" onClick= {this.disableButton} value = {"l"}>l</Button>
                <Button id="m" onClick= {this.disableButton} value = {"m"}>m</Button>
                <Button id="n" onClick= {this.disableButton} value = {"n"}>n</Button>
                <Button id="o" onClick= {this.disableButton} value = {"o"}>o</Button>
                <Button id="p" onClick= {this.disableButton} value = {"p"}>p</Button>
                <Button id="q" onClick= {this.disableButton} value = {"q"}>q</Button>
                <Button id="r" onClick= {this.disableButton} value = {"r"}>r</Button>
                <Button id="s" onClick= {this.disableButton} value = {"s"}>s</Button>
                <Button id="t" onClick= {this.disableButton} value = {"t"}>t</Button>
                <Button id="u" onClick= {this.disableButton} value = {"u"}>u</Button>
                <Button id="v" onClick= {this.disableButton} value = {"v"}>v</Button>
                <Button id="w" onClick= {this.disableButton} value = {"w"}>w</Button>
                <Button id="x" onClick= {this.disableButton} value = {"x"}>x</Button>
                <Button id="y" onClick= {this.disableButton} value = {"y"}>y</Button>
                <Button id="z" onClick= {this.disableButton} value = {"z"}>z</Button>
            </Container>
        );
    }



    render() {
        return (
            <Container>
                <Row>
                </Row>

                <Row>
                </Row>

                <canvas id="hangMan" width="300px" height="300px"></canvas>

                <Row>
                    <div id="wordWrap1">
                        <div id="underline1">
                            <div id="letter1"></div>
                        </div>
                        <div id="underline2">
                            <div id="letter2"></div>
                        </div>
                        <div id="underline3">
                            <div id="letter3"></div>
                        </div>
                        <div id="underline4">
                            <div id="letter4"></div>
                        </div>
                        <div id="underline5">
                            <div id="letter5"></div>
                        </div>
                        <div id="underline6">
                            <div id="letter6"></div>
                        </div>
                        <div id="underline7">
                            <div id="letter7"></div>
                        </div>
                        <div id="underline8">
                            <div id="letter8"></div>
                        </div>
                        <div id="underline9">
                            <div id="letter9"></div>
                        </div>
                        <div id="underline10">
                            <div id="letter10"></div>
                        </div>
                        <div id="underline11">
                            <div id="letter11"></div>
                        </div>
                        <div id="underline12">
                            <div id="letter12"></div>
                        </div>
                        <div id="underline13">
                            <div id="letter13"></div>
                        </div>
                        <div id="underline14">
                            <div id="letter14"></div>
                        </div>
                        <div id="underline15">
                            <div id="letter15"></div>
                        </div>
                        <div id="underline16">
                            <div id="letter16"></div>
                        </div>
                        <div id="underline17">
                            <div id="letter17"></div>
                        </div>
                        <div id="underline18">
                            <div id="letter18"></div>
                        </div>
                        <div id="underline19">
                            <div id="letter19"></div>
                        </div>
                        <div id="underline20">
                            <div id="letter20"></div>
                        </div>
                    </div>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <div id="gamePage">
                        <p id="categoryName"></p>
                        <div id="wordWrap">
                            <br />
                            {this.state.lettersVisible ? this.populateLetters() : <Button id="Start" color="primary" size="lg" onClick = {this.renderHangman}> Start </Button>}
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}
