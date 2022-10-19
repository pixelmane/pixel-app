import poplogo from './poplogo.png'
import { Link } from "react-router-dom"
import { collection } from "./collection.js"
export function Start() {
    let starter = collection.length - 1;
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '80%', flexWrap: 'wrap', margin: '0px auto', padding: '10px', borderRadius: '5px'}}>
            <div style={{width: '200px'}}><img alt='poplogo' src={poplogo} style={{height: '100%', width: '100%'}}/></div>3
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><Link to={starter.toString()} ><button className='navButton' >start</button></Link></div>
            <div style={{width: '100%', border: '2px solid white', borderRadius: '5px', padding: '5px'}}>
                <h3 style={{color: 'white', margin: '0px'}}>Goal:</h3>
                <h3 style={{color: 'white', marginLeft: '15px',marginTop: '0', marginBottom: '10px'}}>Correctly guess pixelated image in as few tries as possible.</h3>
            </div>
            <div style={{width: '100%', border: '2px solid white', borderRadius: '5px', padding: '5px', marginTop: '10px'}}>
                <h3 style={{color: 'white', margin: '0px'}}>How to play:</h3>
                <h3 style={{color: 'white',marginTop: '0px', marginLeft: '15px'}}>1. Choose a color square.  Pixels containing chosen color will be revealed.</h3>
                <h3 style={{color: 'white', marginLeft: '15px'}}>2. After each color reveal, you will have an opportunity to guess the image. Correct letters will appear green.</h3>
                <h3 style={{color: 'white', marginLeft: '15px'}}>3. Repeat until you guess correctly or give up.</h3>
                <h4 style={{color: 'white'}}>p.s. - one color is a decoy and will not reveal any pixels...</h4>
            </div>
                
        </div>
    )
}