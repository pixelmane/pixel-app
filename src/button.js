import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { checkAnswer, revealSquares, buildColorArray, buildCheckArray } from './gameboardSlice.js'
// eslint-disable-next-line
import image from './brush.png'
export function Buttons() {
    const [guess, setGuess] = useState('')
    const guessArray = Array.from(guess)
    const dispatch = useDispatch();
    const colorOptions = useSelector(state => state.squares.experiment) 
    const rightAnswer = useSelector(state => state.squares.answer)
    const rightAnswerArray = Array.from(useSelector(state => state.squares.answer))
    const numberOfSquares = useSelector(state => state.squares.colorArray)
    const squaresRevealed = useSelector(state => state.squares.squaresRevealed)
  
    const checkArray = useSelector(state => state.squares.checkArray)
    //rightAnswerArray.forEach((element, index) => checkArray.push({wrong: '?', right: rightAnswerArray[index],correct: false, }))
   
   function handleClick(element, index){
        console.log(element.color)
        dispatch(revealSquares({color: element.color,
                                index: index}))
        
        
    }
   
    useEffect(() => 
    { handleBuild()}
         // eslint-disable-next-line
    , [])
    function handleBuild(){
        dispatch(buildColorArray())
       
        dispatch(buildCheckArray(checkArray))
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
        console.log(checkArray)
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
            <h3 style={{marginTop: '5px', marginBottom: '5px'}}>Pixels uncovered: {(squaresRevealed/numberOfSquares.length * 100).toFixed(2)}%</h3>
            <h2>add pixel colors -> guess image</h2>
        <div style={{width: '100%', justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}}>
            {colorOptions === undefined ? <p>no color</p> : colorOptions.map((element, index) => element.clicked ? <div><div style={{textShadow:'-1px -1px 0 #000,0   -1px 0 #000,1px -1px 0 #000,1px  0   0 #000,1px  1px 0 #000,0    1px 0 #000,-1px  1px 0 #000,-1px  0   0 #000', color: 'white', stroke: '', margin: '2px', opacity: '.3', border: '2px solid grey', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color}} >{element.tiles}</div></div> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '2px',border: '2px solid black', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color}} onClick={() => handleClick(element, index)} >{/*<img alt='imageToGuess' src={image} style={{height: '20px', width: '20px'}}/>*/}</div>)}
            <div style={{margin: '2px', border: '2px solid grey', width: '100px', aspectRatio: '1 / 1'}} id="openGuess" onClick={handleOpenGuess}>Guess</div>
        </div>
       
        
        <div id='formBackground'>
        <div style={{width: '100%', display: 'flex'}}>
        <form id='submitFormContainer' onSubmit={handleSubmit}>
            
        <div style={{width: '100%', display: 'flex', marginBottom: '20px', fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}
            
            </div>
            <div style={{display: 'flex', marginBottom: '20px', fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map((element, index) => <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{guessArray[index] ? guessArray[index] : null}</div>)}
            
            </div>
            <input maxLength={rightAnswerArray.length} value={guess} id='focus' onChange={handleChange} type='text' placeholder="guess here" />
            <button type='submit'>Submit</button>
            <div style={{width: '100%', marginTop: '10px'}}>
        <div style={{marginTop: '25px', color: 'white', border: '1px solid white', borderRadius: '5px', padding: '5px', width: '100px', margin: '0px auto'}} onClick={handleCloseGuess}>close</div>
        </div>
        </form>
       
        </div>
        </div>
        
       
      
       <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'black', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', height: '50px', width: '50px'}}>{element}</div>)}
            
            </div>
        <div id='wrongContainer' style={{width: '100%', justifyContent: 'center', marginTop: '20px', fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}
            
            </div>
        <h5>(goal is to add as few pixel colors as possible)</h5>
        </div>
    )
}