import React, { useState, useEffect } from 'react';
import '../../styles/AdminProfile.css';
import AdminPage from './AdminPage';
import { adminProfileFetch } from '../../bridge/profile';


function AdminProfile() {
  const [adminProfile, setAdminProfile] = useState({
    name: '',
    id: '',
    email: '',
    role: '',
  });

  useEffect(() => {

    async function fetchData() {
      try {
        const respone = await adminProfileFetch();
        setAdminProfile(respone);
      }
      catch (error) {
        alert("We can not fetch profile");
      }
    }
    fetchData();
  }, []);

  return (
    <>
    <AdminPage /> 
    <div className="adminProfilePage">
      <h2>Admin Profile</h2>
      <div className="AdminProfileDetails">
        <p><strong>Name:</strong> {adminProfile.name}</p>
        <p><strong>ID:</strong> {adminProfile.username}</p>
        <p><strong>Email:</strong> {adminProfile.email}</p>
        <p><strong>Role:</strong>Admin</p>
        
      </div>
    </div>
    </>

  );
}

export default AdminProfile;