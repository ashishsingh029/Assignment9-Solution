import React from 'react'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Four from './pages/Four'
import Five from './pages/Five'
import Layout from './layout/Layout'
import AddStudentInfo from './pages/StudentInfo/AddStudentInfo'
import GetAllStudentsInfo from './pages/StudentInfo/GetAllStudentsInfo'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
const App = () => {
    console.log("Backend Api => " + import.meta.env.VITE_BACKEND_API)
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <GetAllStudentsInfo /> },
                { path: '/one', element: <One name = 'Babusahab' age = '21'/> },
                { path: '/two', element: <Two /> },
                { path: '/three', element: <Three /> },
                { path: '/four', element: <Four /> },
                { path: '/five', element: <Five/> }
            ]
        }
    ])
    return <RouterProvider router = {router} />
}
export default App