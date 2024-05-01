import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import studentInfoApis from '../../apis/StudentInfoApis'
const UpdateStudentInfo = () => {
    const { rollno } = useParams()
    const studentNameRef = useRef(null)
    const studentRollRef = useRef(null)
    const studentMobileRef = useRef(null)
    const studentEmailRef = useRef(null)
    const studentCityRef = useRef(null)
    const studentStateRef = useRef(null)
    const studentPincodeRef = useRef(null)
    const [ message , setMessage ] = useState({
        activated: false,
        success: false
    })
    const getStudentInfo = async () => {
        try {
            let res = await studentInfoApis.getStudentInfoByRoll(rollno)
            if(res.status) {
                studentNameRef.current.value = res.data.name
                studentRollRef.current.value = res.data.rollno
                studentMobileRef.current.value = res.data.mobile
                studentEmailRef.current.value = res.data.email
                studentCityRef.current.value = res.data.address.city
                studentStateRef.current.value = res.data.address.state
                studentPincodeRef.current.value = res.data.address.pin
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if( !message.activated || message.success) {
            getStudentInfo()
        }
    }, [ rollno, message.success ])
    const handleSubmit = async event => {
        event.preventDefault()
        const updatedStudentInfo = {
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
        let res = await studentInfoApis.updateStudentInfo(updatedStudentInfo)
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
            <h1>Update Student Info</h1> <hr />
            <form action = '' method = 'post' className = 'px-4' onSubmit = { handleSubmit }>
                <div className = 'mb-2'>
                    <label htmlFor = 'name' className = 'form-label'>
                        Name:
                    </label>
                    <input type = 'text' ref = {studentNameRef} className = 'form-control' id = 'name' placeholder = 'Enter Student Name' required/>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor = 'roll' className = 'form-label'>
                        Roll:
                    </label>
                    <input type='text' ref = {studentRollRef} className='form-control' id='roll' placeholder = 'Enter Roll Number' disabled required/>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor = 'mobile' className = 'form-label'>
                        Mobile:
                    </label>
                    <input type = 'text' ref = {studentMobileRef} className = 'form-control' id = 'mobile' placeholder = 'Enter Mobile Number' required/>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor = 'email' className = 'form-label'>
                        Email address:
                    </label>
                    <input type = 'email' ref = {studentEmailRef} className = 'form-control' id = 'email' placeholder = 'Enter Email Address' required/>
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
                    Update
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
export default UpdateStudentInfo
