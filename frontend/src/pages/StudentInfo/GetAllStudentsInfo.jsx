import React, { useEffect, useState } from 'react'
import studentInfoApis from '../../apis/StudentInfoApis'
const GetAllStudentsInfo = () => {
    const [ students, setStudents ] = useState(null)
    const getAllStudentsInfo = () => {
        let res = studentInfoApis.getAllStudentsInfo()
        if(res.status) {
            setStudents(res.data)
        }
    }
    useEffect(() => {
        getAllStudentsInfo()
    }, [])
    return (
        <div className = 'container'>
            <h1>All Students Info</h1> <hr />
            <table className = 'table'>
                <thead>
                    <tr></tr>
                </thead>
            </table>
        </div>
    )
}

export default GetAllStudentsInfo
