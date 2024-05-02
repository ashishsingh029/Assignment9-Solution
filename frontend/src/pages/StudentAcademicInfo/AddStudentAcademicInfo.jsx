import React, { useRef, useState } from 'react'
import studentAcademicInfoApis from '../../apis/StudentAcademicInfoApis'
const AddStudentAcademicInfo = () => {
    const studentRollRef = useRef(null)
    const studentProgramRef = useRef(null)
    const studentBranchRef = useRef(null)
    const studentCgpaRef = useRef(null)
    const [ message , setMessage ] = useState({
        activated: false,
        success: false
    })
    const handleSubmit = async event => {
        event.preventDefault()
        const newStudentAcademicInfo = {
            rollno: Number(studentRollRef.current.value),
            program: studentProgramRef.current.value, 
            branch: studentBranchRef.current.value, 
            cgpa: studentCgpaRef.current.value
        }
        let res = await studentAcademicInfoApis.addStudentAcademicInfo(newStudentAcademicInfo)
        if(res.status) {
            setMessage({
                activated: true,
                success: true
            })
            studentProgramRef.current.value = ''
            studentRollRef.current.value = ''
            studentBranchRef.current.value = ''
            studentCgpaRef.current.value = ''
        } else {
            setMessage({
                activated: true,
                success: false
            })
        }
    }
    return (
        <div className = 'container'>
            <h1>Add Student Academic Info</h1> <hr />
            <form action = '' method = 'post' className = 'px-4' onSubmit = { handleSubmit }>
                <div className = 'mb-2'>
                    <label htmlFor = 'roll' className = 'form-label'>
                        Roll:
                    </label>
                    <input type = 'text' ref = {studentRollRef} className = 'form-control' id = 'roll' placeholder = 'Enter Roll Number' required/>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor = 'program' className = 'form-label'>
                        Program:
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
                    Student Added Successfully!
                </div>
            }
            { message.activated && !message.success && 
                <div className = 'alert alert-danger'>
                    Error Adding Student!!
                </div>
            }
        </div>
    )
}
export default AddStudentAcademicInfo
