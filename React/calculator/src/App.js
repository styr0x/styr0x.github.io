import './App.css';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React, {useState} from 'react';

function App() {
  
  const [displayNum1, setNum1Display] = useState("");
  const [displayNum2, setNum2Display] = useState("");
  const [displayOperand, setOperandDisplay] = useState("");
  const [displayEquals, setEqualsDisplay] = useState("");
  const [displayAnswer, setAnswerDisplay] = useState("");

  const keyPads = [];

  let keypadNumber = 0;
  
  let answer;

  function chooseNumber(e) {

    if (displayOperand === "") {
      setNum1Display(displayNum1 + e.target.innerText);
      console.log("number 1 is:" + displayNum1);
    }
    else {
      setNum2Display(displayNum2 + e.target.innerText);
      console.log("number 2 is: " + displayNum2);

    }

  }

  function chooseOperand(e) {
    setOperandDisplay(e.target.innerText);
    console.log("the operand is: " + displayOperand);
    
  }

  function calculate() {
    if (displayOperand === "+") {
      setAnswerDisplay(parseFloat(displayNum1) + parseFloat(displayNum2));
    }
    else if (displayOperand === "-") {
      setAnswerDisplay(parseFloat(displayNum1) - parseFloat(displayNum2));
    }
    else if (displayOperand === "*") {
      setAnswerDisplay(parseFloat(displayNum1) * parseFloat(displayNum2));
    }
    else if (displayOperand === "/") {
      setAnswerDisplay(parseFloat(displayNum1) / parseFloat(displayNum2));
    }

    setEqualsDisplay("=");
    
    console.log("the answer is " + displayAnswer);

  }

  for (let i = 0; i < 10; i++) {

    keyPads.push(<Button variant="contained" color="primary" onClick={chooseNumber}>
    {keypadNumber}
    </Button>);

    keypadNumber++;
  }
  return (
    <div className="parent">
      <div class="visualizeParent">
        <br></br>
        <span class="visualize"> {displayNum1} {displayOperand} {displayNum2} {displayEquals} {displayAnswer} </span>
      </div>

      <div className="keyPad">
        <Container maxWidth="xs">

          <Grid sm="6">
            {keyPads}
            <Button variant="contained" color="primary" onClick={chooseNumber}>
              .
            </Button>
            <div className="operators">
              <Button variant="contained" color="secondary" onClick={chooseOperand}>
              +
              </Button>
              <Button variant="contained" color="secondary" onClick={chooseOperand}>
              -
              </Button>
              <Button variant="contained" color="secondary" onClick={chooseOperand}>
              *
              </Button>
              <Button variant="contained" color="secondary" onClick={chooseOperand}>
              /
              </Button>
              <Button variant="contained" color="secondary" onClick={calculate}>
              =
              </Button>

            </div>
          </Grid>
        </Container>
        


      </div>
    </div>
  );
}

export default App;
