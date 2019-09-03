import React, { Component } from 'react';
import { Row, Container, Col, Button, ButtonGroup } from 'reactstrap';

import '../css/HangmanSingle.css';

var numWrong = 0
var numRight = 0
var word = "jasono"
var wordArray = ["j", "a", "s", "o", "n", "o"]

export default class HangmanSingle extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    // populateLetters = () => {
    //     var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    //                     'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    //                     'W', 'X', 'Y', 'Z'];

    //     var alphabetList = alphabet.map(function(apb) {
    //                                     return (<Button>{apb}</Button>);
    //                                 });

    //     console.log(alphabetList);

    //     // return alphabetList
    // }


    renderHangman = () =>  {
        var x = word.length;
        for (var i = 1; i < x + 1; i++) {
            document.getElementById('letter'+ i).innerHTML = word[i - 1];
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
}

    disableButton(event) {
        console.log(event)
        document.getElementById(event.target.value).disabled = true;
        var ctx = document.getElementById("hangMan").getContext('2d');
        var bool = true
        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] == event.target.value) {
                (document.getElementById('letter' + (i + 1))).style.visibility = "visible"
                bool = false
                numRight = numRight + 1
            }
        }
        if (numRight == wordArray.length) {
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
                alert("You have Lost! Try again next time!")
        }
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
                <Row>
                    <div id="gamePage">
                    <p id="categoryName"></p>
                    <div id="wordWrap">
                    {/* OnClick = {this.renderHangman} */}
                            <button id="Start" onClick = {this.renderHangman} >Start</button>
                            <button id="a" onClick= {this.disableButton} value = {"a"}>a</button>
                            <button id="b" onClick= {this.disableButton} value = {"b"}>b</button>
                            <button id="c" onClick= {this.disableButton} value = {"c"}>c</button>
                            <button id="d" onClick= {this.disableButton} value = {"d"}>d</button>
                            <button id="e" onClick= {this.disableButton} value = {"e"}>e</button>
                            <button id="f" onClick= {this.disableButton} value = {"f"}>f</button>
                            <button id="g" onClick= {this.disableButton} value = {"g"}>g</button>
                            <button id="h" onClick= {this.disableButton} value = {"h"}>h</button>
                            <button id="i" onClick= {this.disableButton} value = {"i"}>i</button>
                            <button id="j" onClick= {this.disableButton} value = {"j"}>j</button>
                            <button id="k" onClick= {this.disableButton} value = {"k"}>k</button>
                            <button id="l" onClick= {this.disableButton} value = {"l"}>l</button>
                            <button id="m" onClick= {this.disableButton} value = {"m"}>m</button>
                            <button id="n" onClick= {this.disableButton} value = {"n"}>n</button>
                            <button id="o" onClick= {this.disableButton} value = {"o"}>o</button>
                            <button id="p" onClick= {this.disableButton} value = {"p"}>p</button>
                            <button id="q" onClick= {this.disableButton} value = {"q"}>q</button>
                            <button id="r" onClick= {this.disableButton} value = {"r"}>r</button>
                            <button id="s" onClick= {this.disableButton} value = {"s"}>s</button>
                            <button id="t" onClick= {this.disableButton} value = {"t"}>t</button>
                            <button id="u" onClick= {this.disableButton} value = {"u"}>u</button>
                            <button id="v" onClick= {this.disableButton} value = {"v"}>v</button>
                            <button id="w" onClick= {this.disableButton} value = {"w"}>w</button>
                            <button id="x" onClick= {this.disableButton} value = {"x"}>x</button>
                            <button id="y" onClick= {this.disableButton} value = {"y"}>y</button>
                            <button id="z" onClick= {this.disableButton} value = {"z"}>z</button>


                    </div>
                    </div>
                    <ButtonGroup>
                        {/* {this.populateLetters()} */}
                    </ButtonGroup>
                </Row>

            </Container>
        );
    }
}
