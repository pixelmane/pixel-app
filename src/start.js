import { collection } from "./collection"
import { Link } from "react-router-dom"

export function Start() {
    
    return (
        <div>
            {collection.map((element,index) => <Link to={`/${index}`}><button>{index}</button></Link> )}        
        </div>
    )
}