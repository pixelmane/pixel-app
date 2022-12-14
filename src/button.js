import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { giveUp, setNumber, checkAnswer, revealSquares, buildColorArray, buildCheckArray } from './gameboardSlice.js';
import { Gameboard } from "./gameboard.js";
import decoy from './decoy.png'
import  Moment from 'moment';
import { collection } from "./collection.js";
import check from './check.png';
// eslint-disable-next-line
import image from './brush.png'


export function Buttons( { number } ) {
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
    const numberOfColumns = useSelector(state => state.squares.numberOfColumns)
   
    //rightAnswerArray.forEach((element, index) => checkArray.push({wrong: '?', right: rightAnswerArray[index],correct: false, }))
   
   function handleClick(element, index){
        
        dispatch(revealSquares({color: element.color,
                                index: index}))
                                
        
       
            document.getElementById('formBackground').style.display = 'block'
            document.getElementById('focus').focus()
        
       
        if (element.color === fakeColor){
            
            document.getElementById('decoy').style.display = 'flex'

        } 
        setTimeout(() => {
            document.getElementById('decoy').style.display = 'none'
   }, 1500)
       
    }
   
    useEffect(() => 
    { handleBuild()}
         // eslint-disable-next-line
    , [number])
    function handleBuild(){
        dispatch(setNumber(number))
        dispatch(buildColorArray())
       
        dispatch(buildCheckArray(checkArray))
        
        var root = document.querySelector(':root')
        root.style.setProperty('--columns', numberOfColumns)
        
    }
    function handleChange(e){
        if(guess.length < rightAnswerArray.length && e.target.value !== 'DEL'){
        setGuess(guess => guess + e.target.value.toUpperCase())
       
        }
        if(e.target.value === 'DEL'){
            let newGuess = Array.from(guess);
            newGuess.pop()
            setGuess(newGuess.join(''))
        }
    
}
    function handleSubmit(e) {
        
        e.preventDefault()
        
        dispatch(checkAnswer(guess))
        if(guess.toLowerCase() !== rightAnswer.toLowerCase()){
        handleCloseGuess()
        document.getElementById('wrongContainer').style.display = 'flex'
        setTimeout(() => document.getElementById('wrongContainer').style.display = 'none', 2000)
        }
        setGuess('')
    }
    function handleGiveUp(){
        dispatch(checkAnswer(rightAnswer))
        dispatch(giveUp())
    }
    function handleCloseGuess() {
        document.getElementById('formBackground').style.display = 'none'
       
    }
    function handleReveal() {
        if( document.getElementById('guessContainer').style.display === 'none'){
        document.getElementById('guessContainer').style.display = 'flex'
        document.getElementById('revealTab').innerHTML = 'close'
        
        } else {
            document.getElementById('guessContainer').style.display = 'none'
            document.getElementById('revealTab').innerHTML = 'Previous Guesses'
        }
    }
  
    function randomNumber() {
        return Math.floor(Math.random()* 50)
    }
    return(
        <div>
            <h2 style={{marginBottom: '3px',fontSize: 'min(4vw, 16px)', color: 'white'}}>popsquares #{Number(number) + 1} - {Moment().subtract(collection.length - Number(number) -1 , 'days').format('MMM Do YYYY')}</h2>
        
            
        <div style={{width: '100%', justifyContent: 'center', display: 'flex', flexWrap: 'nowrap'}}>
            {colorOptions === undefined ? <p>no color</p> : colorOptions.map((element, index) => element.clicked ? <div style={{ color: 'white', stroke: '', margin: '2px', opacity: '1', border: '2px solid white', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color, display: 'flex', justifyContent: 'center', alignItems: 'center'}} ><img alt='checkmark' style={{height: '90%', width: '90%'}} src={check} /></div> : <div style={{ order: randomNumber(),border: '2px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '2px', width: '50px', aspectRatio: '1 / 1', backgroundColor: element.color}} onClick={() => handleClick(element, index)} >{/*<img alt='imageToGuess' src={image} style={{height: '20px', width: '20px'}}/>*/}</div>)}
            {/*<div style={{margin: '2px', border: '2px solid grey', width: '100px', aspectRatio: '1 / 1'}} id="openGuess" onClick={handleOpenGuess}>Guess</div>*/}
        </div>
       <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '60px', marginBottom: '50px'}}>
       <button className='navButton' style={{width: '80px', height: '30px', padding: '5px', margin: '10px auto'}} onClick={handleGiveUp}>give up</button>
       <h3 style={{width: '50%', color: 'white'}}>Uncovered: {(squaresRevealed/numberOfSquares.length * 100).toFixed(2)}%</h3>
       </div>
       

        <div id='formBackground' >
        <div style={{width: '100%', maxWidth: '400px', margin: '0 auto'}}>
        <Gameboard />
        </div>
        
        <div style={{width: '100%', display: 'flex'}}>
        
        <form id='submitFormContainer' onSubmit={handleSubmit}>
            
        
           {/*{prevGuesses.length === 0 ?  <div style={{width: '100%', display: 'flex', flexWrap: 'nowrap',  marginBottom: '10px', fontWeight: 'bold', fontSize: '30px'}}>{checkArray.map(element => <div style={{display: 'flex',marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}</div> : prevGuesses.map(element => <div style={{display: 'flex', marginTop: '6px', width: '100%', fontWeight: 'bold', fontSize: '30px'}}>{element.map(element => element.correct === false ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'red', border: '2px solid white',width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div>)}
            </div>)}*/}
           
            <div style={{display: 'flex',justifyContent: 'center', fontWeight: 'bold', fontSize: '30px', maxWidth: '400px', margin: '0 auto'}}>
            {checkArray.map((element, index) => <div style={{ display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{guessArray[index] ? guessArray[index] : '?'}</div>)}
            
            </div>
            <input maxLength={rightAnswerArray.length} value={guess} id='focus' onChange={handleChange} type='text' placeholder="thoughts?" />
            <div type='button' id="keyboardCont" style={{maxWidth: '400px'}}>
      
      <div  id="firstRow">
        <button className='keyboardButton' type='button' id="Q"  value="Q" onClick={(e) => handleChange(e)}>Q</button>
        <button className='keyboardButton' type='button' id="W"  value="W" onClick={(e) => handleChange(e)}>W</button>
        <button className='keyboardButton' type='button' id="E"  value="E" onClick={(e) => handleChange(e)}>E</button>
        <button className='keyboardButton' type='button' id="R"  value="R" onClick={(e) => handleChange(e)}>R</button>
        <button className='keyboardButton' type='button' id="T"  value="T" onClick={(e) => handleChange(e)}>T</button>
        <button className='keyboardButton' type='button' id="Y"  value="Y" onClick={(e) => handleChange(e)}>Y</button>
        <button className='keyboardButton' type='button' id="U"  value="U" onClick={(e) => handleChange(e)}>U</button>
        <button className='keyboardButton' type='button' id="I"  value="I" onClick={(e) => handleChange(e)}>I</button>
        <button className='keyboardButton' type='button' id="O"  value="O" onClick={(e) => handleChange(e)}>O</button>
        <button className='keyboardButton' type='button' id="P"  value="P" onClick={(e) => handleChange(e)}>P</button>
      </div>
      <div  id="secondRow">
        <button className='keyboardButton' type='button' id="A"  value="A" onClick={(e) => handleChange(e)}>A</button>
        <button className='keyboardButton' type='button' id="S"  value="S" onClick={(e) => handleChange(e)}>S</button>
        <button className='keyboardButton' type='button' id="D"  value="D" onClick={(e) => handleChange(e)}>D</button>
        <button className='keyboardButton' type='button' id="F"  value="F" onClick={(e) => handleChange(e)}>F</button>
        <button className='keyboardButton' type='button' id="G"  value="G" onClick={(e) => handleChange(e)}>G</button>
        <button className='keyboardButton' type='button' id="H"  value="H" onClick={(e) => handleChange(e)}>H</button>
        <button className='keyboardButton' type='button' id="J"  value="J" onClick={(e) => handleChange(e)}>J</button>
        <button className='keyboardButton' type='button' id="K"  value="K" onClick={(e) => handleChange(e)}>K</button>
        <button className='keyboardButton' type='button' id="L"  value="L" onClick={(e) => handleChange(e)}>L</button>
      </div>
      <div  id="thirdRow">
        <button className='keyboardButton' type='button' id="ENT"  value="Z" onClick={handleSubmit}>ENT</button>
        <button className='keyboardButton' type='button' id="Z"  value="Z" onClick={(e) => handleChange(e)}>Z</button>
        <button className='keyboardButton' type='button' id="X"  value="X" onClick={(e) => handleChange(e)}>X</button>
        <button className='keyboardButton' type='button' id="C"  value="C" onClick={(e) => handleChange(e)}>C</button>
        <button className='keyboardButton' type='button' id="V"  value="V" onClick={(e) => handleChange(e)}>V</button>
        <button className='keyboardButton' type='button' id="B"  value="B" onClick={(e) => handleChange(e)}>B</button>
        <button className='keyboardButton' type='button' id="N"  value="N" onClick={(e) => handleChange(e)}>N</button>
        <button className='keyboardButton' type='button' id="M"  value="M" onClick={(e) => handleChange(e)}>M</button>
        <button className='keyboardButton' type='button' id="DEL"  value="DEL" onClick={(e) => handleChange(e)}>DEL</button>
      </div>
  </div>


            <div style={{width: '100%', marginTop: '10px'}}>
       {/*} <button type='submit' style={{backgroundColor: 'transparent', fontSize: '20px', marginTop: '25px', color: 'white', border: '1px solid white', borderRadius: '5px', padding: '5px', width: '100px', margin: '0px auto'}}>Guess</button>*/}
        </div>
        </form>
            
        </div>
       
        </div>
       
       
      
       
        <div id='wrongContainer' style={{width: '100%', justifyContent: 'center', fontWeight: 'bold', fontSize: '30px'}}>
           
            {checkArray.map(element => element === '?' ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',width: `min(${100/checkArray.length}%, 65px)`, aspectRatio: '1 / 1'}}>{element}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `min(${100/checkArray.length}%, 65px)`, aspectRatio: '1 / 1'}}>{element}</div>)}
            
            </div>
                 <div id='decoy'><img alt='mystery' src={decoy} style={{width: 'min(70%, 280px)', aspectRatio: '1 / 1'}}/></div>
        <div id='guessTab' style={{maxWidth: '400px', margin: '0 auto'}}>
            <div id='revealTab' style={{color: 'white', fontWeight: 'bold'}} onClick={handleReveal} >Previous Guesses</div>
            
       <div id='guessContainer' style={{display: 'none', flexWrap: 'wrap' ,  maxHeight:'300px', overflowY: 'scroll', justifyContent: 'center'}}>{prevGuesses.length === 0 ?  <div style={{display: 'flex', width: '90%',color: 'white',  flexWrap: 'nowrap',  marginBottom: '10px', fontWeight: 'bold', fontSize: '30px'}}>{checkArray.map(element => <div style={{display: 'flex',marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element}</div>)}</div> : prevGuesses.map(element => <div style={{ display: 'flex', marginTop: '6px', width: '100%', fontWeight: 'bold', fontSize: '30px'}}>{element.map(element => element.correct === false ? <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'red', border: '2px solid white',width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div> : <div style={{display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', border: '2px solid white', width: `${100/checkArray.length}%`, aspectRatio: '1 / 1'}}>{element.letter}</div>)}
            </div>)}</div>
                </div>
        </div>
    )
}