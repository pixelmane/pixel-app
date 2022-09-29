import { Gameboard } from './gameboard';
import './App.css';
import { Buttons } from './button.js'
import { useSelector } from 'react-redux';


function App() {
  const alive = useSelector(state => state.squares.alive)
  const reveals = useSelector(state => state.squares.attempts)
  const guesses = useSelector(state => state.squares.guesses)
  
  return (
    <div className="App">
      
      <Gameboard />
      <Buttons />
      {!alive ? <div id='endContainer'>
        <div style={{marginTop: '200px'}}>
          <h2>You guessed correct.</h2> 
          <h2>It took you {reveals} color reveals.</h2>
          <h2>You guessed {guesses} times.</h2>
          
        
        </div>
      </div> : null}
    </div>
  );
}

export default App;
