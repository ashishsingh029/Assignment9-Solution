import React from 'react'
import Layout from './layout/Layout'
import AddStudentInfo from './pages/StudentInfo/AddStudentInfo'
import GetAllStudentsInfo from './pages/StudentInfo/GetAllStudentsInfo'
import StudentInfoByRoll from './pages/StudentInfo/StudentInfoByRoll'
import UpdateStudentInfo from './pages/StudentInfo/UpdateStudentInfo'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <div className = 'container'><h1>Assignment-9 Solution by Ashish Singh</h1> <hr /> <p>Select any route from navbar to explore</p></div> },
                { path: '/studentinfo/add', element: <AddStudentInfo /> },
                { path: '/studentinfo/read', element: <GetAllStudentsInfo /> },
                { path: '/studentinfo/read/:rollno', element: <StudentInfoByRoll /> },
                { path: '/studentinfo/update/:rollno', element: <UpdateStudentInfo /> },
                { path: '/studentacademicinfo/add', element: <AddStudentInfo /> },
                { path: '/studentacademicinfo/read', element: <GetAllStudentsInfo /> },
                { path: '/studentacademicinfo/read/:rollno', element: <StudentInfoByRoll /> },
                { path: '/studentacademicinfo/update/:rollno', element: <UpdateStudentInfo /> },
                { path: '/combined/add', element: <StudentInfoByRoll /> },
                { path: '/combined/read/:rollno', element: <UpdateStudentInfo /> }
            ]
        }
    ])
    return <RouterProvider router = {router} />
}
export default App