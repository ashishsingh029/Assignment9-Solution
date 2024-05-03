import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import studentAcademicInfoApis from '../../apis/StudentAcademicInfoApis'
const UpdateStudentAcademicInfo = () => {
    const { rollno } = useParams()
    const studentRollRef = useRef(null)
    const studentProgramRef = useRef(null)
    const studentBranchRef = useRef(null)
    const studentCgpaRef = useRef(null)
    const [ message , setMessage ] = useState({
        activated: false,
        success: false
    })
    const getStudentAcademicInfo = async () => {
        try {
            let res = await studentAcademicInfoApis.getStudentAcademicInfoByRoll(rollno)
            if(res.status) {
                studentRollRef.current.value = res.data.rollno
                studentProgramRef.current.value = res.data.program
                studentBranchRef.current.value = res.data.branch
                studentCgpaRef.current.value = res.data.cgpa
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if( !message.activated || message.success) {
            getStudentAcademicInfo()
        }
    }, [ rollno, message.success ])
    const handleSubmit = async event => {
        event.preventDefault()
        const updatedStudentAcademicInfo = {
            rollno: Number(studentRollRef.current.value),
            program: studentProgramRef.current.value, 
            branch: studentBranchRef.current.value, 
            cgpa: studentCgpaRef.current.value
        }
        let res = await studentAcademicInfoApis.updateStudentAcademicInfo(updatedStudentAcademicInfo)
        if(res.status) {
            setMessage({
                activated: true,
                success: true
            })
        } else {
            setMessage({
                activated: true,
                success: false
            })
        }
    }
    return (
        <div className = 'container'>
            <h1>Update Student Academic Info for Roll { rollno }</h1> <hr />
            <form action = '' method = 'post' className = 'px-4' onSubmit = { handleSubmit }>
            <div className = 'mb-2'>
                    <label htmlFor = 'roll' className = 'form-label'>
                        Roll:
                    </label>
                    <input type = 'text' ref = {studentRollRef} className = 'form-control' id = 'roll' placeholder = 'Enter Roll Number' required/>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor = 'program' className = 'form-label'>
                        Mobile:
                    </label>
                    <input type = 'text' ref = {studentProgramRef} className = 'form-control' id = 'program' placeholder = 'Enter Program' required/>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor = 'branch' className = 'form-label'>
                        Branch:
                    </label>
                    <input type = 'text' ref = {studentBranchRef} className = 'form-control' id = 'branch' placeholder = 'Enter Branch' required/>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor = 'cgpa' className = 'form-label'>
                        Cgpa:
                    </label>
                    <input type = 'text' ref = {studentCgpaRef} className = 'form-control' id = 'cgpa' placeholder = 'Enter Cgpa' required/>
                </div>
                <button type = 'submit' className = 'btn w-100 btn-success mb-4 fw-semibold'>
                    Submit
                </button>                
            </form>
            { message.activated && message.success && 
                <div className = 'alert alert-success'> 
                    Student Updated Successfully!
                </div>
            }
            { message.activated && !message.success && 
                <div className = 'alert alert-danger'>
                    Error Updating Student!!
                </div>
            }
        </div>
    )
}
export default UpdateStudentAcademicInfo