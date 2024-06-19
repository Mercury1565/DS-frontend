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
      <Router> 
          <header className='studentHeader'>
            <Link to="/Student-dashboard" onClick={() => handleNavigation('Dashboard')}>Student Dashboard</Link>
            <div className="studentLink">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </header>
          <aside className='StudentasideBar'>
            <ul>
              <li><Link to="/course-registration" onClick={() => handleNavigation('Course Registration')}>Course Registration</Link></li>
              <li><Link to="/Grade-result" onClick={() => handleNavigation('Grade Result')}>Grade Result</Link></li>
              <li><Link to="/upcomig-exams" onClick={() => handleNavigation('Exams')}>Upcomig Exams</Link></li>
              <li><Link to="/Student-dashboard" onClick={() => handleNavigation('profile')}>Profile</Link></li>
            </ul>
          </aside>

          <Routes>
              <Route path="/Grade-result" element={<StudentGrades />} />
              <Route path="/Student-dashboard" element={<StudentProfile />} />
              <Route path="/course-registration" element={<StudentCourseReg />} />
          </Routes>

      </Router>
    </>
  );
}

export default StudentPage;
