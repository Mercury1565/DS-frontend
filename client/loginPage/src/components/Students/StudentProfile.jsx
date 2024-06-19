import React, { useState, useEffect } from 'react';
import '../../styles/StudentProfile.css';
import StudentNavBar from './StudentNavBar.jsx'


function StudentProfile() {
  const [studentProfile, setStudentProfile] = useState({
    name: '',
    id: '',
    email: '',
    department: '',
    YearSemester: [],
  });

  useEffect(() => {
    const fetchedProfile = {
      name: 'John Doe',
      id: 'S12345678',
      email: 'john.doe@university.edu',
      department: 'Computer Science',
      YearSemester: ["2023/24", "2nd Year 1st Semester"],
    };
    setStudentProfile(fetchedProfile);
  }, []);

  return (
    <div className="studentProfilePage">

      <h2>Student Profile</h2>
      <div className="StudentProfileDetails">
        <p><strong>Name:</strong> {studentProfile.name}</p>
        <p><strong>ID:</strong> {studentProfile.id}</p>
        <p><strong>Email:</strong> {studentProfile.email}</p>
        <p><strong>Department:</strong> {studentProfile.department}</p>
        <h3>Academic Year</h3>
        <ul>
          {studentProfile.YearSemester.map((YearSemester, index) => (
            <li key={index}>{YearSemester}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentProfile;