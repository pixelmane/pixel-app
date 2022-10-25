import poplogo from './poplogo.png'
import { Link } from "react-router-dom"
import sponge from './sponge.png'
import { collection } from "./collection.js"
export function Start() {
    let starter = collection.length - 1;
    const goalArray = ['?','?','?','?','?'];
    const howArray = ['H','O','W','T','O','P','L','A','Y']
    const colorSample = ['blue','yellow','red']
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '80%', flexWrap: 'wrap', margin: '0px auto', padding: '10px', borderRadius: '5px', marginTop: '15px'}}>
            <div style={{width: 'min(400px, 100%)'}}><img alt='poplogo' src={poplogo} style={{height: '100%', width: '100%'}}/></div>3
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><Link to={starter.toString()} ><button className='navButton' >start</button></Link></div>
            
            <div style={{display: 'block', width: 'min(400px, 100%)'}}>
                            <div style={{width: 'min(400px, 100%)', borderRadius: '5px'}}>
            {/*<div style={{display: 'flex',justifyContent: 'center', fontWeight: 'bold', fontSize: '30px', maxWidth: '400px', margin: '0 auto'}}>
            {goalArray.map((element, index) => <div style={{ display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',backgroundColor: 'green', width: `${70/goalArray.length}%`, aspectRatio: '1 / 1'}}>{goalArray[index] ? goalArray[index] : '?'}</div>)}
    </div>*/}
            <div style={{display: 'flex',justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', maxWidth: '400px', margin: '0 auto'}}>
            {howArray.map((element, index) => <div style={{ display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',backgroundColor: 'green', width: `${100/howArray.length}%`, aspectRatio: '1 / 1'}}>{howArray[index] ? howArray[index] : '-'}</div>)}
            
            </div>
                 </div>
            <div style={{width: 'min(400px, 100%)', border: '2px solid white', borderRadius: '5px', padding: '5px', marginTop: '10px'}}>
                <div style={{marginTop: '10px', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}><h3 style={{textAlign: 'center', color: 'white', margin: '0px'}}>Select Pixel Color:</h3></div>
                <div style={{display: 'flex', width: '50%', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', margin: '0 auto'}}>
            {colorSample.map((element, index) => <div style={{ display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',backgroundColor: element, width: `${40/colorSample.length}%`, aspectRatio: '1 / 1'}}></div>)}
            
            </div>
            
            </div>
            <div style={{marginTop: '10px',display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}><h3 style={{textAlign: 'center',color: 'white', margin: '0px'}}>Pixels of selected color revealed:</h3></div>
                <div style={{display: 'flex', width: '50%', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', margin: '0 auto'}}>
                <div style={{width: '70%', aspectRatio: '1 / 1', maxWidth: '200px'}}><img alt='sample of gameboard' src={sponge} style={{height: '100%', width: '100%'}}/></div>
            
            </div>
            
            </div>
            <div style={{marginTop: '10px',marginBottom: '10px', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}><h3 style={{textAlign: 'center',color: 'white', margin: '0px'}}>Attempt to guess image:</h3></div>
                <div style={{display: 'flex', width: '50%', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', margin: '0 auto'}}>
                {goalArray.map((element, index) => <div style={{ display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',backgroundColor: 'black', width: `${100/goalArray.length}%`, aspectRatio: '1 / 1'}}>{goalArray[index] ? goalArray[index] : '-'}</div>)}
            
            </div>
            
            </div>
            <div style={{marginTop: '10px', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}><h3 style={{color: 'white', margin: '0px'}}>Repeat:</h3></div>
                <div style={{display: 'flex', width: '50%', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', margin: '0 auto'}}>
            {colorSample.map((element, index) => <div style={{ display: 'flex', marginLeft: '3px',justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid white',backgroundColor: element, width: `${40/colorSample.length}%`, aspectRatio: '1 / 1'}}></div>)}
            
            </div>
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>
             <h5 style={{color: 'white', margin: '0 auto'}}>*one color will be a decoy and will not reveal any pixels</h5>
            </div>
            
            </div>
                </div>
        </div>
    )
}