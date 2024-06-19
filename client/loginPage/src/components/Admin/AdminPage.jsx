import React from 'react'
import './AdminPage.css'

function AdminPage() {
  return (
    <>
    <header className='adminHeader'>
        <a href=''>Admin Dashboard</a>

        <div className="adminLink">
            <a href="">Logout</a>
            
        </div>
    </header>
    <aside className='asideBar'>
        <ul>
            <li><a href="">Admission</a></li>
            <li><a href="">Add Student</a></li>
            <li><a href="">View Student</a></li>
            <li><a href="">Add Teacher</a></li>
            <li><a href="">View Teacher</a></li>
            <li><a href="">Add Course</a></li>
            <li><a href="">View Course</a></li>
        </ul>
    </aside>
    
    </>
  )
}

export default AdminPage