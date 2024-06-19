import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <header className='studentHeader'>
        <Link to="/dashboard" onClick={() => handleNavigation('Dashboard')}>Student Dashboard</Link>
        <div className="studentLink">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <aside className='StudentasideBar'>
        <ul>
          <li><Link to="/course-registration" onClick={() => handleNavigation('Course Registration')}>Course Registration</Link></li>
          <li><Link to="/cost-sharing-form" onClick={() => handleNavigation('Cost Sharing Form')}>Cost Sharing Form</Link></li>
          <li><Link to="/results" onClick={() => handleNavigation('Result')}>Result</Link></li>
          <li><Link to="/tuition-fee" onClick={() => handleNavigation('Tuition Fee')}>Tuition Fee</Link></li>
          <li><Link to="/exams" onClick={() => handleNavigation('Exams')}>Exams</Link></li>
        </ul>
      </aside>
    </div>
  );
}

export default StudentPage;
