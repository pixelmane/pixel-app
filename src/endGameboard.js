import { useSelector, useDispatch } from "react-redux"

import  Moment  from 'moment';
import { collection } from './collection.js';
import { toggleImage } from "./gameboardSlice.js";
import { Gameboard } from "./gameboard.js";
export function EndGameboard( { number } ) {
    let endImage = useSelector(state => state.squares.endImage)
    let dispatch = useDispatch()
    function handleToggle() {
        console.log('we tobbling')
        dispatch(toggleImage())
        if(document.getElementById('toggleIcon').style.justifyContent === 'flex-start'){
            document.getElementById('toggleIcon').style.justifyContent = 'flex-end'
        } else {
            document.getElementById('toggleIcon').style.justifyContent = 'flex-start'
        }
    }
    return(
        <div onClick={handleToggle}>
             <h2 style={{marginBottom: '3px',fontSize: 'min(5vw, 20px)', color: 'white'}}>Deblockle #{Number(number) + 1} - {Moment().subtract(collection.length - Number(number) -1 , 'days').format('MMM Do YYYY')}</h2>
            <div id='toggleIcon' style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '20px', width: '35px', border: '2px solid white', borderRadius: '20px', backgroundColor: 'rgba(0,0,0,.3)'}}><div style={{width: '19px', height: '19px', backgroundColor: 'white', border: '1px solid white', boxSizing: 'border-box', borderRadius: '50%'}}></div></div>
            {endImage === true ? <Squares /> : <Gameboard />}
              </div>
    )
}


function Squares(){
    
    let squareArray = useSelector(state => state.squares.colorArray)
    function createTheSquares(element, index){
        
            return <Square index={index} color={element.color} reveal={element.revealed} />
        
        
    }
    return (
        <div id="squares"  style={{border: 'none', backgroundColor: 'transparent'}}>
            {squareArray.map((element, index) => createTheSquares(element, index))}
        </div>
    )
}

function Square( props ) {
  
  
    return (
    <div style={{backgroundColor: props.color}} className='square'>
       
    </div>
)
}