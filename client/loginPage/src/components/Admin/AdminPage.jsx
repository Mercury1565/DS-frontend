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
      <Router>

        <header className='adminHeader'>
            <Link to='/admin-page'>Admin Dashboard</Link>

            <div className="adminLink">
                <Link to="/logout">Logout</Link>
                
            </div>
        </header>
        <aside className='AdminasideBar'>
            <ul>
                <li><Link to="/add-student">Add Student</Link></li>
                <li><Link to="/add-teacher">Add Teacher</Link></li>
                <li><Link to="/add-course">Add Course</Link></li>
                <li><Link to="/admin-page">Profile</Link></li>
            </ul>
        </aside>
        <Routes>
         
          <Route path="/add-student" element={<StudentREG />} />
          <Route path="/add-teacher" element={<TeacherREG />} />
          <Route path="/add-course" element={<CourseReg />} />
          <Route path="/admin-page" element={<AdminProfile />} />
          
          
          {/* Define other routes as needed */}
        </Routes>
    </Router> 
    </>
  )
}

export default AdminPage;