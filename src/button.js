import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { checkAnswer, revealSquares, buildColorArray } from './gameboardSlice.js'
export function Buttons() {
    const [guess, setGuess] = useState('')
    const dispatch = useDispatch();
    const colorOptions = useSelector(state => state.squares.experiment) 
  
    const numberOfSquares = useSelector(state => state.squares.colorArray)
    const squaresRevealed = useSelector(state => state.squares.squaresRevealed)
    const attempts = useSelector(state => state.squares.attempts)
   const guessTracker = useSelector(state => state.squares.guessTracker)
    function handleClick(element){
        console.log(element.color)
        dispatch(revealSquares(element.color))
        
        
    }
   
    useEffect(() => 
    { handleBuild()
         // eslint-disable-next-line
    }, [])
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
    }
    return(
        <div>
            <h3>Revealed: {squaresRevealed} out of {numberOfSquares.length} Attempts: {attempts}</h3>
            <h2>Click to reveal colors:</h2>
        <div style={{width: '100%', justifyContent: 'space-around', display: 'flex'}}>
            {colorOptions === undefined ? <p>no color</p> : colorOptions.map(element => element.clicked ? <div></div> : <div style={{border: '2px solid black', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color}} onClick={() => handleClick(element)} ></div>)}
        </div>
        <h2>Colors Guessed:</h2>
        <div style={{height: '25px', width: '100%', justifyContent: 'space-around', display: 'flex'}}>
            {colorOptions === undefined ? <p>no color</p> : colorOptions.map(element => !element.clicked ? <div></div> : <div style={{marginTop: '0px', border: '2px solid black', width: '25px', aspectRatio: '1 / 1', backgroundColor: element.color}} ></div>)}
        </div>
        <h2>Guess the image:</h2>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' placeholder="guess here" />
            <button type='submit'>Submit</button>
        </form>
        <div id='guessTrackerContainer'>
        {guessTracker ? guessTracker.map(element => <div className='guess' >X</div>) : null}
        </div>
        </div>
    )
}