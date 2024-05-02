import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import studentAcademicInfoApis from '../../apis/StudentAcademicInfoApis'
import SearchAcademicByRollInNavbar from '../../components/SearchAcademicByRollInNavbar'
const GetAllStudentsAcademicInfo = () => {
    const [ students, setStudents ] = useState(null)
    const getAllStudentsInfo = async () => {
        let res = await studentAcademicInfoApis.getAllStudentAcademicInfo()
        // console.log(res.data)
        if(res.status) {
            setStudents(res.data)
        }
    }
    const deleteStudentByRoll = async roll => {
        await studentAcademicInfoApis.deleteStudentAcademicInfoByRoll(roll)
    }
    useEffect(() => {
        getAllStudentsInfo()
    }, [ students ])
    return (
        <div className = 'container'>
            <div className = 'd-flex align-items-center justify-content-between mb-0 pe-0'>
                <h1 className = 'd-inline-block w-auto'>All Students Info</h1> 
                <SearchAcademicByRollInNavbar />
            </div>
            <hr />
            <table className = 'table'>
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Program</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { students && Array.isArray(students) &&
                        students.map(student => (
                            <tr key = {student.rollno}>
                                <td>{student.rollno}</td>  
                                <td>{student.program}</td>  
                                <td>
                                    <Link className = 'btn btn-info' to = {`/studentinfo/read/${student.rollno}`}>View</Link>
                                    <Link className = 'btn btn-warning ms-1' to = {`/studentinfo/update/${student.rollno}`}>Update</Link>
                                    <button className = 'btn btn-danger ms-1' onClick = {() => deleteStudentByRoll(student.rollno)}>Delete</button> 
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default GetAllStudentsAcademicInfo