import { Gameboard } from './gameboard';
import './App.css';
import { Buttons } from './button.js'
import { useSelector } from 'react-redux';
import { EndGameboard } from './endGameboard';


function App() {
  
   
    const checkArray = useSelector(state => state.squares.checkArray)
  const alive = useSelector(state => state.squares.alive)
  const reveals = useSelector(state => state.squares.attempts)
  const guesses = useSelector(state => state.squares.guesses)
  
  return (
    <div className="App">
      
      <Gameboard />
      <Buttons />
      {!alive ? <div id='endContainer'>
        <div style={{marginTop: '100px'}}>
          <div style={{margin: '0 auto', width: '75%', aspectRatio: '1 / 1'}}>
          <EndGameboard />
          </div>
          <div style={{display: 'flex', marginTop: '20px', marginBottom: '20px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div>)}
            
            </div>
          <h2>Nice!</h2> 
          <h2>Colors Revealed: {reveals}</h2>
          <h2>Guesses: {guesses}</h2>
          
        
        </div>
      </div> : null}
    </div>
  );
}

export default App;
