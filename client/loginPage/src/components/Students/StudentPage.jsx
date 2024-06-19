import React from 'react'
import { Link } from 'react-router-dom'

function StudentPage() {
  return (
    <div>
        <header className='studentHeader'>
            <Link to='/studentDashboard'>Student Dashboard</Link>
    
            <div className="studentLink">
                <Link to='/logout'>Logout</Link>
            </div>
        </header>
        <aside className='asideBar'>
            <ul> 
                <li><Link to='/courseRegistration'>Course Registration</Link></li>
                <li><Link to='/costSharingForm'>Cost sharing Form</Link></li>
                <li><Link to='/result'>Result</Link></li>
                <li><Link to='/tuitionFee'>Tuition fee</Link></li>
                <li><Link to='/exams'>Exams</Link></li>
                <li><Link to='/studentRegistration'>Student Registration</Link></li>
            </ul>
        </aside>
    </div>
  )
}

export default StudentPage