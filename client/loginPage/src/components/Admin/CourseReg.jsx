import React, { useState } from 'react';
import '../../styles/CourseReg.css';
import AdminPage from './AdminPage';


function CourseReg() {
const [courses, setCourses] = useState([]);
const [course, setCourse] = useState({ department: '', courseName: '', year: '', semester: '', creditHour: '', prerequisites: [''], corequisites: [''] });

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
    setCourse({ ...course, [field]: [...course[field], ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses([...courses, course]);
    setCourse({ department: '', courseName: '', year: '', semester: '', creditHour: '', prerequisites: [''], corequisites: [''] });
  };


  return (
    <>
    <AdminPage/>
    <div className='courseReg-container'>
        <div className='courseReg-card'>
        <h1>Course Registration</h1>
      <form className = 'courseReg-form' onSubmit={handleSubmit}>
        <label className = 'courseReg-label'>
          DepartmentID:
          <input className='courseReg-input' type="text" name="department" value={course.department} onChange={handleChange} />
        </label>
        <label className = 'courseReg-label'>
          Course Name:
          <input className='courseReg-input' type="text" name="courseName" value={course.courseName} onChange={handleChange} />
        </label>
        <label className = 'courseReg-label'>
          Year:
          <input className='courseReg-input' type="text" name="year" value={course.year} onChange={handleChange} />
        </label>
        <label className = 'courseReg-label'>
          Semester:
          <input className='courseReg-input' type="text" name="semester" value={course.semester} onChange={handleChange} />
        </label>
        <label className = 'courseReg-label'>
          Credit Hour:
          <input className='courseReg-input' type="text" name="creditHour" value={course.creditHour} onChange={handleChange} />
        </label>
        <label className='courseReg-label'>
            Prerequisites:
            {course.prerequisites.map((prerequisite, index) => (
            <div key={index}>
              <button type="button" onClick={() => handleRemoveFields(index, 'prerequisites')}>Remove</button>
              <input className='courseReg-input' type="text" name="prerequisites" value={prerequisite} onChange={(e) => handleMultiInputChange(e, index, 'prerequisites')} />
            </div>
          ))}
            <button type="button" onClick={() => handleAddFields('prerequisites')}>Add Prerequisite</button>
          </label>
        <button className='courseReg-button' type="submit">Add Course</button>
      </form>
      </div>
      <table className='courseReg-table'>
      <thead className='courseReg-thead'>
        <tr>
            <th className="courseReg-table-header c-th">Department</th>
            <th className="courseReg-table-header c-th">Course Name</th>
            <th className="courseReg-table-header c-th">Year</th>
            <th className="courseReg-table-header c-th">Semester</th>
            <th className="courseReg-table-header c-th">Credit Hour</th>
            <th className="courseReg-table-header c-th">Prerequisites</th>
        </tr>
        </thead>
        <tbody>
        {courses.map((course, index) => (
            <tr key={index}>
            <td className="courseReg-table-data     {course.prerequisites.map((prerequisite, index) => (
            <div key={index}>{prerequisite}</div>
            ))}
        </td>c-td">{course.department}</td>
            <td className="courseReg-table-data c-td">{course.courseName}</td>
            <td className="courseReg-table-data c-td">{course.year}</td>
            <td className="courseReg-table-data c-td">{course.semester}</td>
            <td className="courseReg-table-data c-td">{course.creditHour}</td>
            <td className="courseReg-table-data">
            {course.prerequisites.map((prerequisite, index) => (
            <div key={index}>{prerequisite}</div>
            ))}
        </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>

    </>

  );
}

export default CourseReg;