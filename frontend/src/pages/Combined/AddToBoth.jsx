import React, { useState, useRef } from 'react'
import combinedApis from '../../apis/CombinedApis'
const AddToBoth = () => {
    const studentNameRef = useRef(null)
    const studentRollRef = useRef(null)
    const studentMobileRef = useRef(null)
    const studentEmailRef = useRef(null)
    const studentCityRef = useRef(null)
    const studentStateRef = useRef(null)
    const studentPincodeRef = useRef(null)
    const studentProgramRef = useRef(null)
    const studentBranchRef = useRef(null)
    const studentCgpaRef = useRef(null)
    const [ message , setMessage ] = useState({
        activated: false,
        success: false
    })
    const handleSubmit = async event => {
        event.preventDefault()
        const newStudentInfo = {
            name: studentNameRef.current.value,
            rollno: Number(studentRollRef.current.value),
            mobile: studentMobileRef.current.value,
            email: studentEmailRef.current.value,
            address: {
                city: studentCityRef.current.value,
                state: studentStateRef.current.value,
                pin: Number(studentPincodeRef.current.value)
            }
        }
        const newStudentAcademicInfo = {
            rollno: Number(studentRollRef.current.value),
            program: studentProgramRef.current.value, 
            branch: studentBranchRef.current.value, 
            cgpa: studentCgpaRef.current.value
        }
        let res = await combinedApis.addToBothCollections({ studentInfo: newStudentInfo, studentAcademicInfo: newStudentAcademicInfo })
        if(res.status) {
            setMessage({
                activated: true,
                success: true
            })
            studentNameRef.current.value = ''
            studentMobileRef.current.value = ''
            studentEmailRef.current.value = ''
            studentCityRef.current.value = ''
            studentStateRef.current.value = ''
            studentPincodeRef.current.value = ''
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
            <h1>Add Student Info To Both Collections</h1> <hr />
            <form action = '' method = 'post' className = 'px-4' onSubmit = { handleSubmit }>
                <div className = 'mb-2'>
                    <label htmlFor = 'name' className = 'form-label'>
                        Name:
                    </label>
                    <input type = 'text' ref = {studentNameRef} className = 'form-control' id = 'name' placeholder = 'Enter Student Name' required/>
                </div>
                <div className = 'input-group mb-2 pe-3'>
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'roll'>Roll:</label>
                        <input id = 'roll' ref = { studentRollRef } className = 'form-control input-group-lg' type = 'text' placeholder = 'Enter Roll' required/>
                    </div>       
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'mobile' className = 'ms-2'>Mobile:</label>
                        <input id = 'mobile' ref = { studentMobileRef } className = 'form-control input-group-lg ms-2' type = 'text' placeholder = 'Enter Mobile' required/>
                    </div>
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'email' className = 'ms-3'>Email:</label>
                        <input id = 'email' ref = { studentEmailRef } className = 'form-control input-group-lg ms-3' type = 'text' placeholder = 'Enter Email Address' required/>
                    </div>
                </div>
                <div className = 'input-group mb-2 pe-3'>
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'program'>Program:</label>
                        <input id = 'program' ref = { studentProgramRef } className = 'form-control input-group-lg' type = 'text' placeholder = 'Enter Program' required/>
                    </div>       
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'branch' className = 'ms-2'>Branch:</label>
                        <input id = 'branch' ref = { studentBranchRef } className = 'form-control input-group-lg ms-2' type = 'text' placeholder = 'Enter Branch' required/>
                    </div>
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'cgpa' className = 'ms-3'>Cgpa:</label>
                        <input id = 'cgpa' ref = { studentCgpaRef } className = 'form-control input-group-lg ms-3' type = 'text' placeholder = 'Enter Cgpa:' required/>
                    </div>
                </div>
                <div className = 'input-group mb-3 pe-3'>
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'city'>City:</label>
                        <input id = 'city' ref = {studentCityRef} className = 'form-control input-group-lg' type = 'text' placeholder = 'Enter City' required/>
                    </div>       
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'State' className = 'ms-2'>State:</label>
                        <input id = 'State' ref = {studentStateRef} className = 'form-control input-group-lg ms-2' type = 'text' placeholder = 'Enter State' required/>
                    </div>
                    <div className = 'col-sm-4'>
                        <label htmlFor = 'pincode' className = 'ms-3'>Pincode:</label>
                        <input id = 'pincode' ref = {studentPincodeRef} className = 'form-control input-group-lg ms-3' type = 'text' placeholder = 'Enter Pincode:' required/>
                    </div>
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
export default AddToBoth