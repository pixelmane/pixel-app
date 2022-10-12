import { useSelector } from "react-redux"

import  Moment  from 'moment';
import { collection } from './collection.js';
export function EndGameboard( { number } ) {
 
    return(
        <div >
             <h2 style={{marginBottom: '3px',fontSize: '5vw', color: 'white'}}>Dyspixel #{Number(number) + 1} - {Moment().subtract(collection.length - Number(number) -1 , 'days').format('MMM Do YYYY')}</h2>
        
            <Squares />
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