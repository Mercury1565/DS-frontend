import React, { useState, useEffect } from 'react';
import '../../styles/StudentProfile.css';
import StudentPage from './StudentPage';
import { studentProfileFetch } from '../../bridge/profile';


function StudentProfile() {
  const [studentProfile, setStudentProfile] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await studentProfileFetch();
        setStudentProfile(respone);
      }
      catch (error) {
        alert("We can not fetch profile");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <StudentPage />
      <div className="studentProfilePage">
        <h2>Student Profile</h2>
        <div className="StudentProfileDetails">
          <p><strong>Name:</strong> {studentProfile.name}</p>
          <p><strong>ID:</strong> {studentProfile.id}</p>
          <p><strong>Email:</strong> {studentProfile.email}</p>
          <p><strong>Department:</strong> {studentProfile.department}</p>
          <h3>Year</h3>
          <ul>
            <li>{studentProfile.academic_year}</li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default StudentProfile;