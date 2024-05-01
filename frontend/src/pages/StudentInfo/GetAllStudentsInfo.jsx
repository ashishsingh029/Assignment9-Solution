import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import studentInfoApis from '../../apis/StudentInfoApis'
import SearchByRollInNavbar from '../../components/SearchByRollInNavbar'
const GetAllStudentsInfo = () => {
    const [ students, setStudents ] = useState(null)
    const getAllStudentsInfo = async () => {
        let res = await studentInfoApis.getAllStudentInfo()
        // console.log(res.data)
        if(res.status) {
            setStudents(res.data)
        }
    }
    const deleteStudentByRoll = async roll => {
        await studentInfoApis.deleteStudentInfoByRoll(roll)
    }
    useEffect(() => {
        getAllStudentsInfo()
    }, [ students ])
    return (
        <div className = 'container'>
            <div className = 'd-flex align-items-center justify-content-between mb-0 pe-0'>
                <h1 className = 'd-inline-block w-auto'>All Students Info</h1> 
                <SearchByRollInNavbar />
            </div>
            <hr />
            <table className = 'table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { students && Array.isArray(students) &&
                        students.map(student => (
                            <tr key = {student.rollno}>
                                <td>{student.name}</td>  
                                <td>{student.rollno}</td>  
                                <td>{student.email}</td>  
                                <td>
                                    <Link className = "btn btn-info" to = {`/studentinfo/read/${student.rollno}`}>View</Link>
                                    <Link className = "btn btn-warning ms-1" to = {`/studentinfo/update/${student.rollno}`}>Update</Link>
                                    <button className = "btn btn-danger ms-1" onClick = {() => deleteStudentByRoll(student.rollno)}>Delete</button> 
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default GetAllStudentsInfo