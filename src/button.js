import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { checkAnswer, revealSquares, buildColorArray, buildCheckArray } from './gameboardSlice.js';
import { Gameboard } from "./gameboard.js";
import decoy from './decoy.png'
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
    const fakeColor = useSelector(state => state.squares.fakeColor)
    const checkArray = useSelector(state => state.squares.checkArray)
    const prevGuesses = useSelector(state => state.squares.previousGuesses)
    //rightAnswerArray.forEach((element, index) => checkArray.push({wrong: '?', right: rightAnswerArray[index],correct: false, }))
   
   function handleClick(element, index){
        console.log(element.color)
        dispatch(revealSquares({color: element.color,
                                index: index}))
                                
        
        setTimeout(() => {
            document.getElementById('formBackground').style.display = 'block'
            document.getElementById('focus').focus()
        },0)
        console.log(element.color)
        console.log(fakeColor)
        if (element.color === fakeColor){
            console.log('they match')
            document.getElementById('decoy').style.display = 'flex'

        }
        setTimeout(() => {
            document.getElementById('decoy').style.display = 'none'
   }, 1500)
       
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
        setGuess(e.target.value.toUpperCase())
        console.log(guess)
    }
   
    function handleSubmit(e) {
        console.log(prevGuesses)
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
    
    function handleCloseGuess() {
        document.getElementById('formBackground').style.display = 'none'
       
    }
  
    return(
        <div>
            <h3 style={{marginTop: '5px', marginBottom: '5px'}}>Pixels uncovered: {(squaresRevealed/numberOfSquares.length * 100).toFixed(2)}%</h3>
            
        <div style={{width: '100%', justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}}>
            {colorOptions === undefined ? <p>no color</p> : colorOptions.map((element, index) => element.clicked ? <div><div style={{ borderRadius: '50%',textShadow:'-1px -1px 0 #000,0   -1px 0 #000,1px -1px 0 #000,1px  0   0 #000,1px  1px 0 #000,0    1px 0 #000,-1px  1px 0 #000,-1px  0   0 #000', color: 'white', stroke: '', margin: '2px', opacity: '.3', border: '2px solid grey', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color, display: 'grid', alignItems: 'center'}} >{element.tiles}</div></div> : <div style={{ border: '2px solid black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '2px', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color}} onClick={() => handleClick(element, index)} >{/*<img alt='imageToGuess' src={image} style={{height: '20px', width: '20px'}}/>*/}</div>)}
            {/*<div style={{margin: '2px', border: '2px solid grey', width: '100px', aspectRatio: '1 / 1'}} id="openGuess" onClick={handleOpenGuess}>Guess</div>*/}
        </div>
       
       
        <div id='formBackground'>
        <div style={{width: '100%'}}>
        <Gameboard />
        </div>
        
        <div style={{width: '100%', display: 'flex'}}>
        
        <form id='submitFormContainer' onSubmit={handleSubmit}>
            
        
           {prevGuesses.length === 0 ?  <div style={{width: '100%', display: 'flex', flexWrap: 'nowrap',  marginBottom: '10px', fontWeight: 'bold', fontSize: '30px'}}>{checkArray.map(element => <div style={{display: 'flex',marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}</div> : prevGuesses.map(element => <div style={{display: 'flex', marginTop: '6px', width: '100%', fontWeight: 'bold', fontSize: '30px'}}>{element.map(element => element.correct === false ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'red', border: '2px solid white',width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div>)}
            </div>)}
           
            <div style={{display: 'flex', marginTop: '10px', marginBottom: '10px', fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map((element, index) => <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{guessArray[index] ? guessArray[index] : null}</div>)}
            
            </div>
            <input maxLength={rightAnswerArray.length} value={guess} id='focus' onChange={handleChange} type='text' placeholder="thoughts?" />
            
            <div style={{width: '100%', marginTop: '10px'}}>
        <button type='submit' style={{backgroundColor: 'transparent', fontSize: '20px', marginTop: '25px', color: 'white', border: '1px solid white', borderRadius: '5px', padding: '5px', width: '100px', margin: '0px auto'}}>Guess</button>
        </div>
        </form>
       
        </div>
        </div>
       
       
      
       
        <div id='wrongContainer' style={{width: '100%', justifyContent: 'center', fontWeight: 'bold', fontSize: '30px'}}>
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}
            
            </div>
            <h2 style={{fontSize: '4vw'}}>add pixel colors -> guess image</h2>
        <div id='decoy'><img alt='mystery' src={decoy} style={{width: '70%', aspectRatio: '1 / 1'}}/></div>
        </div>
    )
}