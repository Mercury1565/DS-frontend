import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/AdminPage.css';

function AdminPage() {
  // Example useState usage if needed for future expansion
  const [state, setState] = useState();

  return (
    <>
      <header className='adminHeader'>
          <Link to='/admin-dashboard'>Admin Dashboard</Link>

          <div className="adminLink">
              <Link to="/logout">Logout</Link>
              
          </div>
      </header>
      <aside className='AdminasideBar'>
          <ul>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/add-student">Add Student</Link></li>
              <li><Link to="/view-student">View Student</Link></li>
              <li><Link to="/add-teacher">Add Teacher</Link></li>
              <li><Link to="/view-teacher">View Teacher</Link></li>
              <li><Link to="/add-course">Add Course</Link></li>
              <li><Link to="/view-course">View Course</Link></li>
          </ul>
      </aside>
      
    </>
  )
}

export default AdminPage;