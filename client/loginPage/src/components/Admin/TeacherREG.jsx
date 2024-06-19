import React, { useState } from 'react';
import '../../styles/TeacherREG.css';

function TeacherRegistrationForm() {
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
        <form className='teacherForm' onSubmit={handleSubmit}>
            <label className='TeacherFormLabel'>First Name</label>
            <input className='TeacherRegistration' name="FirstName" type="text" placeholder="First Name" value={formData.FirstName} onChange={handleChange} />

            <label className='TeacherFormLabel'>Last Name</label>
            <input className='TeacherRegistration' name="LastName" type="text" placeholder="Last Name" value={formData.LastName} onChange={handleChange} />

            <label className='TeacherFormLabel'>Department</label>
            <input className='TeacherRegistration' name="department" type="text" placeholder="Department" value={formData.department} onChange={handleChange} />

            <label className='TeacherFormLabel'>Email</label>
            <input className='TeacherRegistration' name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <label className='TeacherFormLabel'>Password</label>
            <input className='TeacherRegistration' name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <label className='TeacherFormLabel'>Nationality</label>
            <input className='TeacherRegistration' name="nationality" type="text" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
            <label className='TeacherFormLabel'>Phone Number</label>
            <input className='TeacherRegistration' name="phoneNumber" type="text" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
            <label className='TeacherFormLabel'>Address</label>
            <input className='TeacherRegistration' name="address" type="text" placeholder="Address" value={formData.address} onChange={handleChange} />
            <button className='submitButton' type="submit">Submit</button>
        </form>
    );
}

export default TeacherRegistrationForm;


