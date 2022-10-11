

import { useSelector } from "react-redux"


export function Gameboard( {number} ) {
    
    
    return(
        <div style={{marginTop: '5px'}}>
            <Squares />
            
        </div>
    )
}


function Squares(){
    
    let squareArray = useSelector(state => state.squares.colorArray)
    function createTheSquares(element, index){
        
            return <Square index={index} border={element.revealed ? 'none' : '.15px solid grey'} color={element.revealed ? element.color : 'white'} reveal={element.revealed} />
        
        
    }
    return (
        <div id="squares" >
            {squareArray.map((element, index) => createTheSquares(element, index))}
        </div>
    )
}

function Square( props ) {
   
    
   
    return (
    <div style={{fontSize: '1vw',color: 'grey', boxSizing: 'border-box',border: props.border, backgroundColor: props.color}} className='square'>
       {props.reveal ? "" : '?'}
    </div>
)
}