import React, { useState } from 'react';
import '../../styles/StudentCourseReg.css'; 
import { courseResgistration, registartionCourse } from '../../bridge/courseRegistration';

function CourseRegistrationForm() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [offeredCourses, setOfferedCourses] = useState([]);
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [showCourses, setShowCourses] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const courses = {
    '4': {
      '1': [{ id: 'CSE101', creditHour: 3, ects: 6 },
            { id: 'CSE201', creditHour: 3, ects: 6 },
            { id: 'CSE301', creditHour: 3, ects: 6 },
            { id: 'CSE401', creditHour: 3, ects: 6 },
            { id: 'CSE701', creditHour: 3, ects: 6 },
            { id: 'CSE801', creditHour: 3, ects: 6 },
            { id: 'CSE601', creditHour: 3, ects: 6 }   
      ],
      '2': [{ id: 'MAT202', creditHour: 4, ects: 8 }],
    },
    '5': {
      '1': [{ id: 'PHY303', creditHour: 3, ects: 6 }],
      '2': [],
    },
  };

  const handleSelectCourse = (courseId) => {
    setSelectedCourses(prevCourses => 
      prevCourses.includes(courseId) 
        ? prevCourses.filter(id => id !== courseId) 
        : [...prevCourses, courseId]
    );
  };

  const handleSelectAllChange = () => {
    setSelectAll(prevSelectAll => !prevSelectAll);
    if (!selectAll) {
      setSelectedCourses(offeredCourses.map(course => course.id));
    } else {
      setSelectedCourses([]);
    }
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setSemester('');
    setSelectedCourses([]);
    setShowCourses(false);
    setSelectAll(false);
  };

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
    <form className = "courseRegForm" onSubmit={handleSubmit}>
      <label>
        Year:
        <select value={year} onChange={handleYearChange}>
          <option value="">Select year</option>
          {['1', '2', '3', '4', '5'].map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </label>
      <label>
        Semester:
        <select value={semester} onChange={handleSemesterChange}>
          <option value="">Select semester</option>
          {['1', '2'].map(semester => (
            <option key={semester} value={semester}>{semester}</option>
          ))}
        </select>
      </label>
      <button type="button" onClick={handleShowCourses}>Show Courses</button>
      {showCourses && (
        <div>
          <input
            type="checkbox"
            id="selectAll"
            checked={selectAll}
            onChange={handleSelectAllChange}
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
      )}
      <button type="submit" className="submitBtn">Register</button>
    </form>
  );
}

export default CourseRegistrationForm;