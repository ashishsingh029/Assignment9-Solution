import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import studentAcademicInfoApis from '../../apis/StudentAcademicInfoApis'
import SearchAcademicByRollInNavbar from '../../components/SearchAcademicByRollInNavbar'
const StudentAcademicInfoByRoll = () => {
    const { rollno } = useParams()
    const [ studentAcademicInfo, setStudentAcademicInfo ] = useState(null)
    const [ deleted, setdeleted ] = useState(false)
    const getStudentInfo = async () => {
        // console.log('Function called')
        try {
            let res = await studentAcademicInfoApis.getStudentAcademicInfoByRoll(rollno)
            if(res.status) {
                setStudentAcademicInfo(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const deleteStudentByRoll = async roll => {
        await studentAcademicInfoApis.deleteStudentAcademicInfoByRoll(roll)
        setStudentAcademicInfo(null)
        setdeleted(true)
    }
    useEffect(() => {
        getStudentInfo()
    }, [ rollno ])
    return (
        <div className = 'container'>
            <div className = 'd-flex align-items-center justify-content-between mb-0 pe-0'>
                <h1 className = 'd-inline-block w-auto'>Student Academic Info By Roll</h1> 
                <SearchAcademicByRollInNavbar />
            </div>
            <hr />
            <div className = "card w-75 mt-5 ms-0">
                { studentAcademicInfo ? (
                    <div className = "card-body">
                        <p className = "card-text">Roll: {studentAcademicInfo.rollno}</p>
                        <p className = "card-text">Program: {studentAcademicInfo.program}</p>
                        <p className = "card-text">Branch: {studentAcademicInfo.branch}</p>
                        <p className = "card-text">Cgpa: {studentAcademicInfo.cgpa}</p>
                        <div className = 'd-flex justify-content-end ms-auto'>
                            <Link className = "btn btn-warning ms-1" to = {`/studentacademicinfo/update/${studentAcademicInfo.rollno}`}>Update</Link>
                            <button className = "btn btn-danger ms-2" onClick = {() => deleteStudentByRoll(studentAcademicInfo.rollno)}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <p className = 'p-4 fs-4'> { !deleted && 'Student Not Found' }</p>
                )}
                { deleted && 
                    <p>Student Deleted Successfully</p>
                }
            </div>
        </div>
    )
}
export default StudentAcademicInfoByRoll