import { useState } from 'react'
import './TwoThree.css'
const Two = () => {
    const [ show, setShow ] = useState(true)
    return (
        <div>
            { show && 
                <p> Use the button to toggle me On/Off </p> 
            }
            <button className = 'button-mac' onClick = { () => setShow(!show) } > { show ? 'Hide Message' : 'Show Message' } </button>
        </div>
    )
}
export default Two