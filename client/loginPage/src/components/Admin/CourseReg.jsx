import React, { useState } from 'react';
import '../../styles/CourseReg.css';
import AdminPage from './AdminPage';
import { addCourse } from '../../bridge/addCourse';

function CourseReg() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        department: '', 
        courseName: '', 
        year: '', 
        semester: '', 
        creditHour: '', 
        prerequisites: [''], 
    });

    const handleMultiInputChange = (e, index, field) => {
        const newValues = [...course[field]];
        newValues[index] = e.target.value;
        setCourse({ ...course, [field]: newValues });
    };

    const handleRemoveFields = (index, field) => {
        const newValues = [...course[field]];
        newValues.splice(index, 1);
        setCourse({ ...course, [field]: newValues });
    };

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleAddFields = (field) => {
      setCourse(prevCourse => ({
        ...prevCourse,
        [field]: [...prevCourse[field], ''],
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCourse(course.department, course.courseName, course.year, course.semester, course.creditHour, course.prerequisites);
        
        setCourse({
            department: '', 
            courseName: '', 
            year: '', 
            semester: '', 
            creditHour: '', 
            prerequisites: [''], 
        });
    };

    return (
        <>
            <AdminPage />
            <div className='courseReg-container'>
                <div className='courseReg-card'>
                    <h1>Course Registration</h1>
                    <form className='courseReg-form' onSubmit={handleSubmit}>
                        <div className='courseReg-group'>
                            <label className='courseReg-label'>DepartmentID:</label>
                            <input className='courseReg-input' type="text" name="department" value={course.department} onChange={handleChange} />
                        </div>
                        <div className='courseReg-group'>
                            <label className='courseReg-label'>Course Name:</label>
                            <input className='courseReg-input' type="text" name="courseName" value={course.courseName} onChange={handleChange} />
                        </div>
                        <div className='courseReg-group'>
                            <label className='courseReg-label'>Year:</label>
                            <input className='courseReg-input' type="text" name="year" value={course.year} onChange={handleChange} />
                        </div>
                        <div className='courseReg-group'>
                            <label className='courseReg-label'>Semester:</label>
                            <input className='courseReg-input' type="text" name="semester" value={course.semester} onChange={handleChange} />
                        </div>
                        <div className='courseReg-group'>
                            <label className='courseReg-label'>Credit Hour:</label>
                            <input className='courseReg-input' type="text" name="creditHour" value={course.creditHour} onChange={handleChange} />
                        </div>
                        <div className='courseReg-group'>
                          <label className='courseReg-label'>Prerequisites:</label>
                          {course.prerequisites.map((prerequisite, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                              <button type="button" onClick={() => handleRemoveFields(index, 'prerequisites')}>Remove</button>
                              <input className='courseReg-input' type="text" name="prerequisites" value={prerequisite} onChange={(e) => handleMultiInputChange(e, index, 'prerequisites')} />
                            </div>
                          ))}
                          <button type="button" onClick={() => handleAddFields('prerequisites')}>Add Prerequisite</button>
                        </div>
                        <button className='courseReg-button' type="submit">Add Course</button>
                    </form>
                </div>
                
            </div>
        </>
    );
}

export default CourseReg;
