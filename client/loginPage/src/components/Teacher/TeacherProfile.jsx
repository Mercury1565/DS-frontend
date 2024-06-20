import React, { useState, useEffect } from 'react';
import '../../styles/TeacherProfile.css';
import TeacherPage from './TeacherPage';


function TeacherProfile() {
  const [teacherProfile, setTeacherProfile] = useState({
    name: '',
    id: '',
    email: '',
    department: '',


  });

  useEffect(() => {
    // Fetch teacher profile data from an API or local storage
    // This is a placeholder for fetching logic
    const fetchedProfile = {
      name: 'Jane Doe',
      id: 'T12345678',
      email: 'jane.doe@university.edu',
      department: 'Mathematics',
    };
    setTeacherProfile(fetchedProfile);
  }, []);

  return (
    <>
    <TeacherPage />
    <div className="teacherProfilePage">
      <h2>Teacher Profile</h2>
      <div className="TeacherProfileDetails">
        <p><strong>Name:</strong> {teacherProfile.name}</p>
        <p><strong>ID:</strong> {teacherProfile.id}</p>
        <p><strong>Email:</strong> {teacherProfile.email}</p>
        <p><strong>Department:</strong> {teacherProfile.department}</p>
        
      </div>
    </div>
    </>

  );
}

export default TeacherProfile;