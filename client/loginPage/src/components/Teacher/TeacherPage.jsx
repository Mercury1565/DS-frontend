import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import '../../styles/TeacherPage.css';

function TeacherPage() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavigation = (section) => {
    setActiveSection(section);
    console.log(`Navigating to ${section}`);
  };

  const handleLogout = () => {
    console.log('Logging out');
  };

  return (
    <div>
          <header className='TeacherHeader'>
            <span className='Spanforteacher'>Teacher Dashboard</span>
            <div className="TeacherLink">
               <Link to="/logout">Logout</Link>
            </div>

          </header>
          <aside className='TeacherasideBar'>
            <ul>
              <li><Link to="/grade-submit" onClick={() => handleNavigation('Course Registration')}> Submit Grade </Link></li>
              <li><Link to="/announcement" onClick={() => handleNavigation('Cost Sharing Form')}> Announcement</Link></li>
              <li><Link to="/Teacherprofile" onClick={() => handleNavigation('profile') }>Profile </Link> </li>
            </ul>
          </aside> 
          
          
    </div>
  );
}

export default TeacherPage;