import { Gameboard } from './gameboard';
import './App.css';
import { Buttons } from './button.js'
import { useSelector } from 'react-redux';
import { EndGameboard } from './endGameboard';
import { useParams } from 'react-router-dom'; 
import { setNumber, revive } from './gameboardSlice'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { collection } from './collection.js';
import { Link } from 'react-router-dom';
import  Moment from 'moment';
function App(  ) {
  const dispatch = useDispatch();
  const prevGuesses = useSelector(state => state.squares.previousGuesses)
  const numberOfColumns = useSelector(state => state.squares.numberOfColumns)
  const gaveUp = useSelector(state => state.squares.gaveUp)
   const { number } = useParams()
    const checkArray = useSelector(state => state.squares.checkArray)
  const alive = useSelector(state => state.squares.alive)
  useEffect(() => 
  { handleBuild()}
       // eslint-disable-next-line
  , [numberOfColumns])
  function handleBuild(){
      dispatch(setNumber(number))
     
      var root = document.querySelector(':root')
      root.style.setProperty('--columns', numberOfColumns)
      
  }
  
  function handleRevive() {
    dispatch(revive())
    document.getElementById('formBackground').style.display = 'none'
  }
  return (
    <div className="App" style={{maxWidth: '400px'}}>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '5px',  marginBottom: '5px', fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '1.5px', marginRight: '1.5px', justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'black', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '1.5px', marginRight: '1.5px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}
            
            </div>
      <Gameboard />
      <Buttons number={number} />
      {!alive ? <div id='endContainer'>
        <div style={{margin: '0 auto', maxWidth: '400px'}}>
          <div style={{margin: '0 auto', width: '90%', aspectRatio: '1 / 1'}}>
          <EndGameboard number={number}/>
          
          {gaveUp === false ? null : <h1 style={{marginTop: '5px', marginBottom: '5px', color: 'white'}}>you gave up...</h1> }
          {prevGuesses.length === 0 ?  <div style={{width: '100%', display: 'flex', flexWrap: 'nowrap',  marginBottom: '10px', fontWeight: 'bold', fontSize: '30px'}}>{checkArray.map(element => <div style={{display: 'flex',marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}</div> : prevGuesses.map(element => <div style={{display: 'flex', margin: '6px auto', width: '100%', fontWeight: 'bold', fontSize: 'min(30px, 8vw)'}}>{element.map(element => element.correct === false ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'red', border: '2px solid white',width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div>)}
            </div>)}
            
            <div>
            <Link  to={`/${Number(number) - 1}`} onClick={handleRevive} > {Number(number) === 0 ? <button disabled>previous day</button> : <button>previous day (#{Number(number)})</button>}</Link>    
            <Link  to={`/${Number(number) + 1}`} onClick={handleRevive} >{Number(number) === collection.length -1 ? <h2 style={{fontSize: '16px', color: 'white'}}>#{Number(number) + 2} released {Moment().endOf('day').add(9,'hours').fromNow()}</h2> : <button>next day (#{Number(number) + 2})</button>}</Link>     
        </div>
          </div>
          
          
          
          
        
        </div>
      </div> : null}
    
    </div>
  );
}

export default App;
