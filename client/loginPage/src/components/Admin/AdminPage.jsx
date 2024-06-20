import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../../styles/AdminPage.css';
import StudentREG from './StudentREG';
import TeacherREG from './TeacherREG';
import CourseReg from './CourseReg';
import AdminProfile from './AdminProfile';

function AdminPage() {
  // Example useState usage if needed for future expansion
  const [state, setState] = useState();

  return (
      <>

        <header className='adminHeader'>
            <span className='SpanforAdmin'>Admin Dashboard</span>
            <div className="adminLink">
                <Link to="/logout">Logout</Link>
            </div>
        </header>
        <aside className='AdminasideBar'>
            <ul>
                <li><Link to="/add-student">Add Student</Link></li>
                <li><Link to="/add-teacher">Add Teacher</Link></li>
                <li><Link to="/add-course">Add Course</Link></li>
                <li><Link to="/admin-profile">Profile</Link></li>
            </ul>
        </aside>
        
      </>
  )
}

export default AdminPage;