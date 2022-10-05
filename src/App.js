import { Gameboard } from './gameboard';
import './App.css';
import { Buttons } from './button.js'
import { useSelector } from 'react-redux';
import { EndGameboard } from './endGameboard';


function App() {
  const prevGuesses = useSelector(state => state.squares.previousGuesses)
   
    const checkArray = useSelector(state => state.squares.checkArray)
  const alive = useSelector(state => state.squares.alive)
 
  const guesses = useSelector(state => state.squares.guesses)
  
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px',  fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'black', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div>)}
            
            </div>
      <Gameboard />
      <Buttons />
      {!alive ? <div id='endContainer'>
        <div style={{marginTop: '100px'}}>
          <div style={{margin: '0 auto', width: '75%', aspectRatio: '1 / 1'}}>
          <EndGameboard />
          {prevGuesses.length === 0 ?  <div style={{width: '100%', display: 'flex', flexWrap: 'nowrap',  marginBottom: '10px', fontWeight: 'bold', fontSize: '30px'}}>{checkArray.map(element => <div style={{display: 'flex',marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}</div> : prevGuesses.map(element => <div style={{display: 'flex', marginTop: '6px', width: '100%', fontWeight: 'bold', fontSize: '30px'}}>{element.map(element => element.correct === false ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'red', border: '2px solid white',width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div>)}
            </div>)}
          </div>
          
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div> : <div style={{fontSize: '35px', fontWeight: '600', display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div>)}
            
            </div>
          <h2>Decent guess.</h2> 
          
          <h2>It took only {guesses} guesses.</h2>
          
        
        </div>
      </div> : null}
    </div>
  );
}

export default App;
