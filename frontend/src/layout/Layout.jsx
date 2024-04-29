import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Layout = () => {
    return (
        <div>
            <Navbar />
            <main className = 'container-fluid'>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout