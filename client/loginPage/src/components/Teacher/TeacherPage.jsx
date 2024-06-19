import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SubmitGrades from './SubmitGrades';
import AnnounceExam from './AnnounceExam';
import TeacherProfile from './TeacherProfile';

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
      <Router>
          <header className='TeacherHeader'>
            <Link to="/Teacherprofile" onClick={() => handleNavigation('Dashboard')}>Teacher Dashboard</Link>
            <div className="TeacherLink">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </header>
          <aside className='TeacherasideBar'>
            <ul>
              <li><Link to="/grade-submit" onClick={() => handleNavigation('Course Registration')}> Submit Grade </Link></li>
              <li><Link to="/announcement" onClick={() => handleNavigation('Cost Sharing Form')}> Announcement</Link></li>
              <li><Link to="/Teacherprofile" onClick={() => handleNavigation('profile') }>Profile </Link> </li>
            </ul>
          </aside>
          
          <Routes>
              <Route path="/grade-submit" element={<SubmitGrades />} />
              <Route path="/announcement" element={<AnnounceExam />} />
              <Route path="/Teacherprofile" element={<TeacherProfile />} />

          </Routes>
      </Router>
          
    </div>
  );
}

export default TeacherPage;