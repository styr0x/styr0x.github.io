import logo from './logo.svg';
import './App.css';
import { countChars } from './wordcounter';

function App() {
  return (
    <div className="App">
      <h1>Word Counter</h1>
      <textarea class="wordBox" id="wordBox"></textarea>
      <div class="counters">

        <div class="leftcounter">
          <p class="n1" id="charAmount">0</p>
          <p class="p1">Characters</p>
      </div>

        <div class="rightcounter">
          <p class="n2" id="wordAmount">0</p>
          <p class="p2">Words</p>
        </div>

      </div>
    </div>
    
  );

  countChars();
}

export default App;
