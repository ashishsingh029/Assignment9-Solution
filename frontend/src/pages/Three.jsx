import { useState } from 'react'
import './TwoThree.css'
const Three = () => {
    const [ loggedin, setLoggedIn ] = useState(false)
    return (
        <div>
            { loggedin && 
                <p> Welcome back! </p> 
            }
            { !loggedin &&
                <p> Please log in </p>
            }
            <button className = 'button-mac' onClick = { () => setLoggedIn(!loggedin) } > { loggedin ? 'Logout' : 'Login' } </button>
        </div>
    )
}
export default Three