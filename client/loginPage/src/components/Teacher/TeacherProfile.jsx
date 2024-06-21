import React, { useState, useEffect } from 'react';
import '../../styles/TeacherProfile.css';
import TeacherPage from './TeacherPage';
import { staffProfileFetch } from '../../bridge/profile';


function TeacherProfile() {
  const [teacherProfile, setTeacherProfile] = useState({
    name: '',
    id: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProfile = await staffProfileFetch();
        setTeacherProfile(fetchedProfile);
      }
      catch (error) {
        alert("Error fetching Teacher Profile");
        console.log(error);
      }
    }
    fetchData();
    
  }, []);

  return (
    <>
    <TeacherPage />
    <div className="teacherProfilePage">
      <h2>Teacher Profile</h2>
      <div className="TeacherProfileDetails">
        <p><strong>Name:</strong> {teacherProfile.name}</p>
        <p><strong>ID:</strong> {teacherProfile.username}</p>
        <p><strong>Email:</strong> {teacherProfile.email}</p>
        <p><strong>Department:</strong> {teacherProfile.department_name}</p>
        
      </div>
    </div>
    </>

  );
}

export default TeacherProfile;