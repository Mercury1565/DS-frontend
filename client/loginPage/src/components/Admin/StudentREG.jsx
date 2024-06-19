import React, { useState } from 'react';
import '../../styles/StudentREG.css';

function StudentRegistrationInputForm() {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        department: '',
        email: '',
        password: '',
        nationality: '',
        phoneNumber: '',
        address: ''
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
        // Here you would typically send formData to your server
        console.log(formData);
    };

    return (
        <form className='studentForm' onSubmit={handleSubmit}>
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

            <label className='StudentFormLabel'>Phone Number</label>
            <input className='StudentRegistrationInput' name="phoneNumber" type="text" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />


            <button className='StudentsubmitButton' type="submit">Submit</button>
        </form>
    );
}

export default StudentRegistrationInputForm;

