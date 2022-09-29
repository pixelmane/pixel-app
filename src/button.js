import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { checkAnswer, revealSquares, buildColorArray } from './gameboardSlice.js'
export function Buttons() {
    const [guess, setGuess] = useState('')
    const dispatch = useDispatch();
    const colorOptions = useSelector(state => state.squares.experiment) 
    const rightAnswer = useSelector(state => state.squares.answer)
    const numberOfSquares = useSelector(state => state.squares.colorArray)
    const squaresRevealed = useSelector(state => state.squares.squaresRevealed)
    const rightArray = Array.from(useSelector(state => state.squares.answer))
   const guessTracker = useSelector(state => state.squares.guessTracker)
    function handleClick(element){
        console.log(element.color)
        dispatch(revealSquares(element.color))
        
        
    }
   
    useEffect(() => 
    { handleBuild()}
         // eslint-disable-next-line
    , [])
    function handleBuild(){
        dispatch(buildColorArray())
        console.log(colorOptions)
        console.log(guess)
    }
    function handleChange(e){
        setGuess(e.target.value)
        console.log(guess)
    }
   
    function handleSubmit(e) {
        e.preventDefault()
        console.log(guess)
        dispatch(checkAnswer(guess))
        if(guess.toLowerCase() !== rightAnswer.toLowerCase()){
        handleCloseGuess()
        document.getElementById('wrongContainer').style.display = 'flex'
        setTimeout(() => document.getElementById('wrongContainer').style.display = 'none', 2000)
        }
        setGuess('')
    }
    function handleOpenGuess() {
        document.getElementById('formBackground').style.display = 'flex'
        document.getElementById('openGuess').style.display = 'none'
        document.getElementById('focus').focus()
    }
    function handleCloseGuess() {
        document.getElementById('formBackground').style.display = 'none'
        document.getElementById('openGuess').style.display = 'flex'
    }
  
    return(
        <div>
            <h3>Pixels uncovered: {(squaresRevealed/numberOfSquares.length * 100).toFixed(2)}%</h3>
            <h2>Click to reveal colors:</h2>
        <div style={{width: '100%', justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}}>
            {colorOptions === undefined ? <p>no color</p> : colorOptions.map(element => element.clicked ? <div><div style={{ margin: '2px', opacity: '.3', border: '2px solid grey', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color}} ></div></div> : <div style={{margin: '2px',border: '2px solid black', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color}} onClick={() => handleClick(element)} ></div>)}
            <div style={{margin: '2px', border: '2px solid grey', width: '100px', aspectRatio: '1 / 1'}} id="openGuess" onClick={handleOpenGuess}>Guess</div>
        </div>
       
        
        <div id='formBackground'>
        <form id='submitFormContainer' onSubmit={handleSubmit}>
            <input value={guess} id='focus' onChange={handleChange} type='text' placeholder="guess here" />
            <button type='submit'>Submit</button>
        </form>
        <div style={{color: 'white', border: '1px solid white', borderRadius: '5px', padding: '5px'}} onClick={handleCloseGuess}>close</div>
        </div>
        <div id='guessTrackerContainer'>
        {guessTracker ? guessTracker.map(element => <div className='guess' >X</div>) : null}
        </div>
       {/* <div id="openGuess" onClick={handleOpenGuess}>Guess</div>*/}
        <div id='wrongContainer'><h1 id='wrongX' >X</h1></div>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', marginTop: '25px'}}>
        {rightArray.map(element => <div style={{width: '25px', borderBottom: '3px solid black', marginLeft: '5px'}}></div>)}
        </div>
        </div>
    )
}