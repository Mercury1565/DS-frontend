import React from 'react'
import './StudentPage.css'
function StudentPage() {
  return (
    <div>
        <header className='studentHeader'>
            <a href=''>Student Dashboard</a>
    
            <div className="studentLink">
                <a href="">Logout</a>
                
            </div>
        </header>
        <aside className='asideBar'>
            <ul>
                <li><a href="">Course Registration</a></li>
                <li><a href="">Cost sharing Form</a></li>
                <li><a href="">Result</a></li>
                <li><a href="">Tution fee</a></li>
                <li><a href="">Exams </a></li>
            </ul>
        </aside>
    </div>
  )
}

export default StudentPage