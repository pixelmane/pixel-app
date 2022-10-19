

import { useSelector } from "react-redux"


export function Gameboard( {number} ) {
    
    
    return(
        <div>
            <Squares />
            
        </div>
    )
}


function Squares(){
    let alive = useSelector(state => state.squares.alive)
    let squareArray = useSelector(state => state.squares.colorArray)
    function createTheSquares(element, index){
        
            return <Square index={index} border={alive ? element.revealed ? 'none' : '.15px solid grey' : 'none'} color={element.revealed ? element.color : 'white'} reveal={element.revealed} />
        
        
    }
    return (
        <div id="squares" >
            {squareArray.map((element, index) => createTheSquares(element, index))}
        </div>
    )
}

function Square( props ) {
   
    let numberOfColumns = useSelector(state => state.squares.numberOfColumns)
   
    return (
    <div style={{width: `${100/numberOfColumns}%`, aspectRatio: '1 / 1',fontSize: '1vw',color: 'grey', boxSizing: 'border-box',border: props.border, backgroundColor: props.color}} className='square'>
       {props.reveal ? "" : ''}
    </div>
)
}