import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard'
const Five = () => {
    const [users, setUsers] = useState(null)
    const getUsers = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/users')
            setUsers(res.data.users)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className = 'container-fluid mt-1'>
            <div className = 'row row-cols-5 mt-2'>
                { users &&
                    users.map(user => (
                        <UserCard
                            key={user.id}
                            name={`${user.firstName} ${user.lastName}`}
                            image={user.image}
                            phone={user.phone}
                            email={user.email}
                            address={user.address}
                        />
                    ))}
            </div>
        </div>
    )
}
export default Five