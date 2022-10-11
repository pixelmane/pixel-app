
import { Link } from "react-router-dom"
import { collection } from "./collection.js"
export function Start() {
    let starter = collection.length - 1;
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '80%', flexWrap: 'wrap', margin: '0 auto', border: '2px solid white', padding: '10px', borderRadius: '5px'}}>
            <h2 style={{color: 'white', marginBottom: '10px'}}>1. Click color circle to reveal pixels in image.</h2>
            <h2 style={{color: 'white', marginBottom: '10px'}}>2. Based upon revealed pixels attempt to guess image.</h2>
            <h2 style={{color: 'white', marginBottom: '10px'}}>3. Repeat until successful...</h2>
            <Link to={starter.toString()} ><button style={{padding: '3px 10px'}}>start</button></Link>    
        </div>
    )
}