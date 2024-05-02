import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import combinedApis from '../../apis/CombinedApis'
const GetInfoByRollFromBoth = () => {
    const { rollno } = useParams()
    const studentRollRef = useRef(null)
    const [ studentInfo, setStudentInfo ] = useState(null)
    const [ studentAcademicInfo, setStudentAcademicInfo ] = useState(null)
    const [ toValue, setToValue ] = useState('/')
    const getStudentInfo = async () => {
        try {
            let res = await combinedApis.getInfoFromBothCollectionsByRoll(rollno)
            if(res.status) {
                setStudentInfo(res.info)
                setStudentAcademicInfo(res.academicInfo)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if(rollno) {
            getStudentInfo()
        }
    }, [ rollno ])
    const updateToValue = () => {
        const roll = studentRollRef.current.value.trim()
        setToValue(`/combined/read/${roll}`)
    }
    return (
        <div className = 'container'>
            <h1 className = 'd-inline-block w-auto'>Combined Student Info By Roll</h1> 
            <div className = 'd-flex justify-content-end'>
                <input className = 'form-control w-25' onChange = { updateToValue } ref = { studentRollRef } id = 'search' placeholder = 'Enter Roll to search Student for' />
                <Link to = { toValue } className = 'btn btn-success ms-2'> 
                Search
            </Link>
            </div>
            <hr />
            <div className = "card w-75 mt-5 ms-0">
                { rollno && studentInfo && studentAcademicInfo ? (
                    <div className = "card-body">
                        <h5 className = "card-title mb-3 fs-2">{studentInfo.name}</h5>
                        <p className = "card-text">Roll: {studentInfo.rollno}</p>
                        <p className = "card-text">Mobile: {studentInfo.mobile}</p>
                        <p className = "card-text">Email: {studentInfo.email}</p>
                        <p className = "card-text">Program: {studentAcademicInfo.program}</p>
                        <p className = "card-text">Branch: {studentAcademicInfo.branch}</p>
                        <p className = "card-text">Cgpa: {studentAcademicInfo.cgpa}</p>
                        <p className = "card-text">Address: {`${studentInfo.address.city}, ${studentInfo.address.state}, ${studentInfo.address.pin}`}</p>
                    </div>
                ) : (
                    <p className = 'p-3'>Enter roll to search in search box.</p>
                )}
            </div>
        </div>
    )
}
export default GetInfoByRollFromBoth