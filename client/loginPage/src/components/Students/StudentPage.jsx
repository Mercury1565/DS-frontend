import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentGrades from './StudentGrades';
import StudentProfile from './StudentProfile';
import StudentCourseReg from './StudentCourseReg';

import '../../styles/StudentPage.css';

function StudentPage() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavigation = (section) => {
    setActiveSection(section);
    console.log(`Navigating to ${section}`);
  };

  const handleLogout = () => {
    console.log('Logging out');
  };

  return (
    <>
          <header className='studentHeader'>
            <span className='SpanforStudent'>Student Dashboard</span>
            <div className="studentLink">
              <Link to="/logout">Logout</Link>
            </div>
            
          </header>
          <aside className='StudentasideBar'>
            <ul>
              <li><Link to="/course-registration" onClick={() => handleNavigation('Course Registration')}>Course Registration</Link></li>
              <li><Link to="/Grade-result" onClick={() => handleNavigation('Grade Result')}>Grade Result</Link></li>
              <li><Link to="/upcomig-exams" onClick={() => handleNavigation('Exams')}>Upcomig Exams</Link></li>
              <li><Link to="/Studentprofile" onClick={() => handleNavigation('profile')}>Profile</Link></li>
            </ul>
          </aside>

    </>
  );
}

export default StudentPage;
