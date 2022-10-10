import { useDispatch, useSelector } from "react-redux"
import { revealColor } from './gameboardSlice.js'

export function EndGameboard() {
    return(
        <div style={{marginTop: '10px'}}>
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
    let dispatch = useDispatch();
    
    function handleClick(index){
        console.log(`my index is ${index}`)
        dispatch(revealColor(index))
    }
    return (
    <div onClick={() => handleClick(props.index)} style={{backgroundColor: props.color}} className='square'>
       
    </div>
)
}