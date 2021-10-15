import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import kickAudioUrl from '../src/sounds/kick.wav'
import snareAudioUrl from '../src/sounds/snare.wav'
import chAudioUrl from '../src/sounds/ch.wav'
import Slider from '@material-ui/core/Slider'


let currentStep = 0;
let loop;
let isPlaying = false;
let kick, snare, ch;
let speed;

function App() {

  const [bpm, setBpm] = useState(140);
  speed = 60000 / bpm / 4;

  const [kickSteps, setKickSteps] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [snareSteps, setSnareSteps] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [chSteps, setChSteps] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [prevKickSteps, setPrevKickSteps] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [prevSnareSteps, setPrevSnareSteps] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [prevChSteps, setPrevChSteps] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  

  
  const clickKickSquare = (index) => {
    const newKickSteps = [...kickSteps,];
    newKickSteps[index] = newKickSteps[index] == 0 ? 1 : 0;
    setKickSteps(newKickSteps);
    setPrevKickSteps(newKickSteps);
  }
  const clickSnareSquare = (index) => {
    const newSnareSteps = [...snareSteps,];
    newSnareSteps[index] = newSnareSteps[index] == 0 ? 1 : 0;
    setSnareSteps(newSnareSteps);
    setPrevSnareSteps(newSnareSteps);
  }
  const clickChSquare = (index) => {
    const newChSteps = [...chSteps,];
    newChSteps[index] = newChSteps[index] == 0 ? 1 : 0;
    setChSteps(newChSteps);
    setPrevChSteps(newChSteps);
  }

  const startSequencer = () => {
    const ctx = new AudioContext();

    if (!isPlaying) {
      isPlaying = true;
      drumLoop();
      function drumLoop() {

        const newKickSteps = [...kickSteps];
        const newSnareSteps = [...snareSteps];
        const newChSteps = [...chSteps];
  

  
        if (newKickSteps[currentStep] == 1) {
          kick = new Audio(kickAudioUrl);
          const kickSource = ctx.createMediaElementSource(kick);
          kickSource.connect(ctx.destination);
          kick.play();
        }
        
  
  
        if (newSnareSteps[currentStep] == 1) {
          snare = new Audio(snareAudioUrl);
          const snareSource = ctx.createMediaElementSource(snare);
          snareSource.connect(ctx.destination);
          snare.play();
        }
  
  
        if (newChSteps[currentStep] == 1) {
          ch = new Audio(chAudioUrl);
          const chSource = ctx.createMediaElementSource(ch);
          chSource.connect(ctx.destination);
          ch.play();
        }
  
        newKickSteps[currentStep] = 2;
        newSnareSteps[currentStep] = 2;
        newChSteps[currentStep] = 2;
  
        setKickSteps(newKickSteps);
        setSnareSteps(newSnareSteps);
        setChSteps(newChSteps);
        
  
  
        currentStep++;


        
        if (currentStep > 15) {
          currentStep = 0;
        }

        loop = setTimeout(() => {
          drumLoop();
        }, speed);

      }

    }
    else {
      isPlaying = false;
      clearTimeout(loop);
      setKickSteps(prevKickSteps);
      setSnareSteps(prevSnareSteps);
      setChSteps(prevChSteps);
      currentStep = 0;
    }

  }

  const stopSequencer = () => {
    if (isPlaying) {
      startSequencer();
    }
  }

  const clearSequencer = () => {
    setKickSteps([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setSnareSteps([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setChSteps([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    setPrevKickSteps([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setPrevSnareSteps([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setPrevChSteps([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const handleBpmChange = (event, newValue) => {

    setBpm(newValue);
    
  }
  
  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div className='sequencerDiv'>
        <div className='sequencerRowDiv'>
        <span className='trackText'>KD</span>
          {kickSteps.map((step, index) => {
            if(step == 1) {
              return <div className="squareActive" key={index} onClick={() => clickKickSquare(index)}></div>
            }
            else if (step == 2) {
              return <div className="playHead" key={index} onClick={() => clickKickSquare(index)}></div>
            }
            else {
              return <div className="squareInactive" key={index} onClick={() => clickKickSquare(index)}></div>
            }
          })}
        </div>

        <div className='sequencerRowDiv'>
        <span className='trackText'>SD</span>
          {snareSteps.map((step, index) => {
              if(step == 1) {
                return <div className="squareActive" key={index} onClick={() => clickSnareSquare(index)}></div>
              }
              else if (step == 2) {
                return <div className="playHead" key={index} onClick={() => clickSnareSquare(index)}></div>
              }
              else {
                return <div className="squareInactive" key={index} onClick={() => clickSnareSquare(index)}></div>
              }
            })}    
        </div>

        <div className='sequencerRowDiv'>
          <span className='trackText'>CH</span>
          {chSteps.map((step, index) => {
              if(step == 1) {
                return <div className="squareActive" key={index} onClick={() => clickChSquare(index)}></div>
              }
              else if (step == 2) {
                return <div className="playHead" key={index} onClick={() => clickChSquare(index)}></div>
              }
              else {
                return <div className="squareInactive" key={index} onClick={() => clickChSquare(index)}></div>
              }
            })}    
        </div>
      </div>
      <span className='trackText'>TEMPO</span>
      <div className='sliderDiv'>
        
        <Slider className='theSlider' min={60} max={240} value={bpm} onChange={handleBpmChange} aria-labelledby="continuous-slider" />
      </div>


      <div className='buttonsDiv'>
        <Button onClick={startSequencer}>START</Button>
        <Button onClick={stopSequencer}>STOP</Button>
        <Button onClick={clearSequencer}>CLEAR</Button>      
      </div>

    </div>
  );
}

export default App;
