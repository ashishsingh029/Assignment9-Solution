import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className = 'navbar navbar-expand-lg bg-body-tertiary'>
            <div className = 'container-fluid'>
                <Link className = 'navbar-brand' to = '/'>
                    Assignment-9
                </Link>
                <ul class = 'navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className = 'nav-item dropdown list-unstyled'>
                        <Link className = 'nav-link dropdown-toggle' to = '/' role = 'button' data-bs-toggle = 'dropdown' aria-expanded = 'false'>
                        StudentInfoRoutes
                        </Link>
                        <ul className = 'dropdown-menu'>
                            <li> <Link className = 'dropdown-item' to = '/'>AddStudentInfo</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>GetAllStudentsInfo</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>GetSingleStudentInfoByRoll</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>UpdateStudentByRoll</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>DeleteStudentByRoll</Link> </li>
                        </ul>
                    </li>
                    <li className = 'nav-item dropdown list-unstyled'>
                        <Link className = 'nav-link dropdown-toggle' to = '/' role = 'button' data-bs-toggle = 'dropdown' aria-expanded = 'false'>
                        StudentAcademicInfoRoutes
                        </Link>
                        <ul className = 'dropdown-menu'>
                            <li> <Link className = 'dropdown-item' to = '/'>AddStudentAcademicInfo</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>GetAllStudentsAcademicInfo</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>GetSingleStudentAcademicInfoByRoll</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>UpdateStudentAcademicInfoByRoll</Link> </li>
                            <li> <Link className = 'dropdown-item' to = '/'>DeleteStudentAcademicInfoByRoll</Link> </li>
                        </ul>
                    </li>
                    <li className = 'nav-item dropdown list-unstyled'>
                        <Link className = 'nav-link dropdown-toggle' to = '/' role = 'button' data-bs-toggle = 'dropdown' aria-expanded = 'false'>
                        CombinedRoutes
                        </Link>
                        <ul className='dropdown-menu'>
                            <li> <Link className='dropdown-item' to = '/'>AddStudentDataToBothCollections</Link> </li>
                            <li> <Link className='dropdown-item' to = '/'>GetStudentDataFromBothCollectionsByRoll</Link> </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar