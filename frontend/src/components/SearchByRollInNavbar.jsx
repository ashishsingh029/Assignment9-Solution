import React from 'react'
const SearchByRollInNavbar = () => {
    return (
        <form className = "d-inline-flex ms-auto">
            <input className = "form-control me-1 flex-grow-2" id = "search" placeholder = "Enter Roll" />
            <button className = "btn btn-success" type = "submit">Search</button>
        </form>
    )
}
export default SearchByRollInNavbar