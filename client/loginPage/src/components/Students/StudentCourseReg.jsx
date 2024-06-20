import React, { useState } from 'react';
import '../../styles/StudentCourseReg.css'; 
import { courseResgistration, registartionCourse } from '../../bridge/courseRegistration';


function StudentCourseReg() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [offeredCourses, setOfferedCourses] = useState([]);
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [showCourses, setShowCourses] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const courses = [
    { id: 'CSE101', creditHour: 3 },
    { id: 'MAT202', creditHour: 4 },
    { id: 'PHY303', creditHour: 3},
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

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSelectedCourses([]);
    setShowCourses(false);
    setSelectAll(false);
  };

  const handleShowCourses = async () => {
    // setShowCourses(true);
    try {
      const courses = await courseResgistration(year, semester);
      setShowCourses(true);
      console.log(courses);
      setOfferedCourses(courses);
    }
    catch (error) {
      alert(error.response.data.detail);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedCourses);
    for(var i=0; i<selectedCourses.length; i++) {
      try {
        await registartionCourse(selectedCourses[i]);
      }
      catch (e) {
        alert("Course Registration Error");
        return;
      }
    }
    // Handle the form submission here
  };
  console.log(offeredCourses);
  return (
    <>
    <StudentPage />
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
          <label className="courseLabel" htmlFor="selectAll">Select All</label>
          {offeredCourses.map((course, index) => (
            
            <div key={index} className="courseOption">
              <input
                type="checkbox"
                id={course.id}
                className="courseCheckbox"
                checked={selectedCourses.includes(course.id)}
                onChange={() => handleSelectCourse(course.id)}
              />
              <label htmlFor={course.id} className="courseLabel">
                {course.name} {course.credit_hour},
              </label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit" className="submitBtn">Register</button>
    </form>
    </>

  );
}

export default StudentCourseReg;