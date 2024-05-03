import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import studentInfoApis from '../../apis/StudentInfoApis'
import SearchByRollInNavbar from '../../components/SearchByRollInNavbar'
const StudentInfoByRoll = () => {
    const { rollno } = useParams()
    const [ studentInfo, setStudentInfo ] = useState(null)
    const [ deleted, setdeleted ] = useState(false)
    const getStudentInfo = async () => {
        try {
            let res = await studentInfoApis.getStudentInfoByRoll(rollno)
            if(res.status) {
                setStudentInfo(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const deleteStudentByRoll = async roll => {
        await studentInfoApis.deleteStudentInfoByRoll(roll)
        setStudentInfo(null)
        setdeleted(true)
    }
    useEffect(() => {
        getStudentInfo()
    }, [ rollno ])
    return (
        <div className = 'container'>
            <div className = 'd-flex align-items-center justify-content-between mb-0 pe-0'>
                <h1 className = 'd-inline-block w-auto'>Student Info for Roll { rollno }</h1> 
                <SearchByRollInNavbar />
            </div>
            <hr />
            <div className = "card w-75 mt-5 ms-0">
                { studentInfo ? (
                    <div className = "card-body">
                        <h5 className = "card-title mb-3 fs-2">{studentInfo.name}</h5>
                        <p className = "card-text">Roll: {studentInfo.rollno}</p>
                        <p className = "card-text">Mobile: {studentInfo.mobile}</p>
                        <p className = "card-text">Email: {studentInfo.email}</p>
                        <p className = "card-text">Address: {`${studentInfo.address.city}, ${studentInfo.address.state}, ${studentInfo.address.pin}`}</p>
                        <div className = 'd-flex justify-content-end ms-auto'>
                            <Link className = "btn btn-warning ms-1" to = {`/studentinfo/update/${studentInfo.rollno}`}>Update</Link>
                            <button className = "btn btn-danger ms-2" onClick = {() => deleteStudentByRoll(studentInfo.rollno)}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <p> { !deleted && 'Student Not Found' }</p>
                )}
                { deleted && 
                    <p className = 'p-4 fs-4'>Student Deleted Successfully</p>
                }
            </div>
        </div>
    )
}
export default StudentInfoByRoll