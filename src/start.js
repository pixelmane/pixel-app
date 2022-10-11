import { collection } from "./collection"
import { Link } from "react-router-dom"

export function Start() {
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '80%', flexWrap: 'wrap', margin: '0 auto', border: '2px solid white', padding: '10px', borderRadius: '5px'}}>
            <h2 style={{color: 'white', marginBottom: '10px'}}>1. Click color circle to reveal pixels in image.</h2>
            <h2 style={{color: 'white', marginBottom: '10px'}}>2. Based upon revealed pixels attempt to guess image.</h2>
            <h2 style={{color: 'white', marginBottom: '10px'}}>3. Repeat until successful...</h2>
            <Link to='0'><button style={{padding: '3px 10px'}}>start</button></Link>    
        </div>
    )
}