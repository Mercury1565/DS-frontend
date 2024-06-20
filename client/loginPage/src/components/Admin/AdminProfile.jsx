import React, { useState, useEffect } from 'react';
import '../../styles/AdminProfile.css';
import AdminPage from './AdminPage';


function AdminProfile() {
  const [adminProfile, setAdminProfile] = useState({
    name: '',
    id: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    // Fetch admin profile data from an API or local storage
    // This is a placeholder for fetching logic
    const fetchedProfile = {
      name: 'John Smith',
      id: 'A12345678',
      email: 'john.smith@university.edu',
      role: 'University Administrator',
    };
    setAdminProfile(fetchedProfile);
  }, []);

  return (
    <>
    <AdminPage /> 
    <div className="adminProfilePage">
      <h2>Admin Profile</h2>
      <div className="AdminProfileDetails">
        <p><strong>Name:</strong> {adminProfile.name}</p>
        <p><strong>ID:</strong> {adminProfile.id}</p>
        <p><strong>Email:</strong> {adminProfile.email}</p>
        <p><strong>Role:</strong> {adminProfile.role}</p>
        
      </div>
    </div>
    </>

  );
}

export default AdminProfile;