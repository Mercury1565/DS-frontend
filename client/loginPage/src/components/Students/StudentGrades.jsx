import React, { useState } from 'react';
import '../../styles/StudentGradesStyle.css';

function StudentGrades() {
  const [student, setStudent] = useState({ name: 'Hermon', id: '123' });
  const [grades, setGrades] = useState([
    {
      year: 1,
      semester: 1,
      courses: [
        { id: 'CS101', name: 'Intro to CS', letterGrade: 'A', grade: 50 },
        { id: 'MA101', name: 'Calculus I', letterGrade: 'B+', grade: 50 },
      ],
    },
    {
    year: 1,
    semester: 2,
    courses: [
      { id: 'CS101', name: 'Intro to CS', letterGrade: 'A', grade: 95 },
      { id: 'MA101', name: 'Calculus I', letterGrade: 'B+', grade: 88 },
      { id: 'MA101', name: 'Calculus I', letterGrade: 'B+', grade: 88 },
      { id: 'MA101', name: 'Calculus I', letterGrade: 'B+', grade: 88 },
      { id: 'MA101', name: 'Calculus I', letterGrade: 'B+', grade: 88 },

      ],
    },
  ]);

  const calculateGPA = (courses) => {
    let total = 0;
    courses.forEach((course) => {
      total += course.grade;
    });
    let average = total / courses.length;
    return (average / 100) * 4;
  };

  return (
    <div>
      <p>Student Name: {student.name}</p>
      <p>Student ID: {student.id}</p>
      {grades.map((semester, index) => (
        <div key={index}>
          <h3>Year {semester.year}, Semester {semester.semester}</h3>
          <table className="student-grades-table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Letter Grade</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {semester.courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.letterGrade}</td>
                  <td>{course.grade}</td>
                </tr>
              ))}
              <tr className='cgpa-row'>
                <td colSpan="1">Cumulative Grade</td>
                <td>{calculateGPA(semester.courses).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default StudentGrades;