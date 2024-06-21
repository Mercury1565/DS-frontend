import React, { useState } from 'react';
import '../../styles/StudentREG.css';
import AdminPage from './AdminPage';
import { createStudent } from '../../bridge/studentCreate';

function StudentREG() {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        department: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createStudent(formData.username, formData.password, formData.FirstName, formData.LastName, formData.email, formData.department);
    };

    return (
        <>
        <AdminPage />   
        <form className='studentForm' onSubmit={handleSubmit}>
            <label className='StudentFormLabel'>Username</label>
            <input className='StudentRegistrationInput' name="username" type="text" placeholder="username" value={formData.username} onChange={handleChange} />

            <label className='StudentFormLabel'>First Name</label>
            <input className='StudentRegistrationInput' name="FirstName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
            
            <label className='StudentFormLabel'>Last Name</label>
            <input className='StudentRegistrationInput' name="LastName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
           
            <label className='StudentFormLabel'>Department</label>
            <input className='StudentRegistrationInput' name="department" type="text" placeholder="Department" value={formData.department} onChange={handleChange} />

            <label className='StudentFormLabel'>Email</label>
            <input className='StudentRegistrationInput' name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />

            <label className='StudentFormLabel'>Password</label>
            <input className='StudentRegistrationInputInput' name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />

            <button className='StudentsubmitButton' type="submit">Submit</button>
        </form>

        </>
    );
}

export default StudentREG;

