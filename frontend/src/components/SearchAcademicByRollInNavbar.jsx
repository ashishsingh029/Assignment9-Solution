import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
const SearchAcademicByRollInNavbar = () => {
    const studentRollRef = useRef(null)
    const [ toValue, setToValue ] = useState('/studentinfo/read/')
    const updateToValue = () => {
        const roll = studentRollRef.current.value.trim()
        setToValue(`/studentacademicinfo/read/${roll}`)
    }
    return (
        <div className = 'd-inline-flex ms-auto'>
            <input className = 'form-control me-1 flex-grow-2' id = 'search' ref = { studentRollRef } onChange = { updateToValue } placeholder = 'Enter Roll' required/>
            <Link to = { toValue } className = 'btn btn-success'> 
                Search
            </Link>
        </div>
    )
}
export default SearchAcademicByRollInNavbar