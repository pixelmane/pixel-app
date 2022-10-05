import { useDispatch, useSelector } from "react-redux"
import { revealColor } from './gameboardSlice.js'

export function Gameboard() {
    return(
        <div style={{marginTop: '15px'}}>
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
        <div id="squares" style={{boxShadow: '0px 2px 7px black'}}>
            {squareArray.map((element, index) => createTheSquares(element, index))}
        </div>
    )
}

function Square( props ) {
    let dispatch = useDispatch();
    
    function handleClick(index){
        console.log(`my index is ${index}`)
        dispatch(revealColor(index))
    }
    return (
    <div onClick={() => handleClick(props.index)} style={{fontSize: '1vw',color: 'grey', boxSizing: 'border-box',border: props.border, backgroundColor: props.color}} className='square'>
       {props.reveal ? "" : '?'}
    </div>
)
}