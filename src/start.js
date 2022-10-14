
import { Link } from "react-router-dom"
import { collection } from "./collection.js"
export function Start() {
    let starter = collection.length - 1;
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '80%', flexWrap: 'wrap', margin: '0px auto', padding: '10px', borderRadius: '5px'}}>
            <h1 style={{color: 'white', fontFamily: 'arial'}}>deblockle</h1>
            <div style={{width: '100%', border: '2px solid white', borderRadius: '5px', padding: '5px'}}>
                <h2 style={{color: 'white'}}>Goal:</h2>
                <h2 style={{color: 'white', marginLeft: '15px', marginBottom: '10px'}}>Correctly guess pixelated image in as few tries as possible.</h2>
            </div>
            <div style={{width: '100%', border: '2px solid white', borderRadius: '5px', padding: '5px', marginTop: '10px'}}>
                <h2 style={{color: 'white'}}>How to play:</h2>
                <h2 style={{color: 'white', marginLeft: '15px', marginBottom: '10px'}}>1. Choose a color square.  Pixels containing chosen color will be revealed.</h2>
                <h2 style={{color: 'white', marginLeft: '15px', marginBottom: '10px'}}>2. After each color reveal, you will have an opportunity to guess the image. Correct letters will appear green.</h2>
                <h2 style={{color: 'white', marginLeft: '15px', marginBottom: '10px'}}>3. Repeat until you guess correctly or give up.</h2>
            
            </div>
            <Link to={starter.toString()} ><button style={{marginTop: '10px', padding: '3px 10px'}}>start</button></Link>    
        </div>
    )
}