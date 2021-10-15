//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
//import { countChars } from './wordcounter';




function App() {

  const [charAmount, setCharAmount] = useState(0);
  const [wordAmount, setWordAmount] = useState(0);

  function handleChange(e) {
    setCharAmount(e.target.value.length);
    setWordAmount(e.target.value.split(/\s+/).length -1);
  }
  
  return (  
    
    <div className="App">
      <h1>Word Counter</h1>
      <input name="inputBox" onChange={handleChange} />
      <div class="counters">

        <div class="leftcounter">
          <p class="n1" id="charAmount">{charAmount}</p>
          <p class="p1">Characters</p>
        </div>

        <div class="rightcounter">
          <p class="n2" id="wordAmount">{wordAmount}</p>
          <p class="p2">Words</p>
        </div>

      </div>
    </div>

    
  );



}

export default App;
