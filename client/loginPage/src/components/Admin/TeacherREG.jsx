import React, { useState } from "react";
import "../../styles/TeacherREG.css";
import AdminPage from "./AdminPage";
import { createTeacher } from "../../bridge/addTeacher";

function TeacherREG() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    username: "",
    department: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
        await createTeacher(formData.username, formData.password, formData.FirstName, formData.LastName, formData.email, formData.department);
        alert("Teacher created successfully");
    }
    catch (error) {
        alert("Error creating teacher");
        console.log(error);
    }
  };

  return (
    <>
      <AdminPage />
      <form className="teacherForm" onSubmit={handleSubmit}>
        <label className="TeacherFormLabel">Username</label>
        <input
          className="TeacherRegistration"
          name="username"
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label className="TeacherFormLabel">First Name</label>
        <input
          className="TeacherRegistration"
          name="FirstName"
          type="text"
          placeholder="First Name"
          value={formData.FirstName}
          onChange={handleChange}
        />

        <label className="TeacherFormLabel">Last Name</label>
        <input
          className="TeacherRegistration"
          name="LastName"
          type="text"
          placeholder="Last Name"
          value={formData.LastName}
          onChange={handleChange}
        />

        <label className="TeacherFormLabel">Department</label>
        <input
          className="TeacherRegistration"
          name="department"
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <label className="TeacherFormLabel">Email</label>
        <input
          className="TeacherRegistration"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="TeacherFormLabel">Password</label>
        <input
          className="TeacherRegistration"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default TeacherREG;
