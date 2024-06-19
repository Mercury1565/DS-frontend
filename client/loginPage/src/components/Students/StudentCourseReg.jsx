import React, { useState } from 'react';
import '../../styles/StudentCourseReg.css'; 


function CourseRegistrationForm() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const courses = [
    { id: 'CSE101', creditHour: 3, ects: 6 },
    { id: 'MAT202', creditHour: 4, ects: 8 },
    { id: 'PHY303', creditHour: 3, ects: 6 },
  ];

  const handleSelectCourse = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCourses(courses.map(course => course.id));
    } else {
      setSelectedCourses([]);
    }
  };

  const isAllSelected = selectedCourses.length === courses.length;

  return (
    <form className="courseRegForm">
      <h3 className="formTitle">Course Registration</h3>
      <div className="selectAllWrapper">
        <input
          type="checkbox"
          id="selectAll"
          className="selectAllCheckbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        <label htmlFor="selectAll" className="selectAllLabel">Select All</label>
      </div>
      {courses.map((course, index) => (
        <div key={index} className="courseOption">
          <input
            type="checkbox"
            id={course.id}
            className="courseCheckbox"
            checked={selectedCourses.includes(course.id)}
            onChange={() => handleSelectCourse(course.id)}
          />
          <label htmlFor={course.id} className="courseLabel">
            {course.id} - Credit Hour: {course.creditHour}, ECTS: {course.ects}
          </label>
        </div>
      ))}
      <button type="submit" className="submitBtn">Register</button>
    </form>
  );
}

export default CourseRegistrationForm;