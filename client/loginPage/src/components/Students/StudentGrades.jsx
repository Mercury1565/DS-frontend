import React, { useEffect, useState } from 'react';
import '../../styles/StudentGradesStyle.css';
import StudentPage from './StudentPage';
import { courseResult } from '../../bridge/courseResult';


function StudentGrades() {
  const [student, setStudent] = useState({});
  const [grades, setGrades] = useState([]);
  const dictionary_grade = {"A": 4, "B":3, "C":2, "D":1, "F":0};
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await courseResult();
        setStudent({name: result.student, id: result.username});
        setGrades(result.grades);
      }
      catch(e) {
        alter("We can not fetch result");
      }
    }
    fetchData();
    
  }, []);

  const calculateGPA = (courses) => {
    let total = 0;
    let sumi = 0;
    courses.forEach((course) => {
      total += (dictionary_grade[course.grade] * course.course.credit_hour);
      sumi += course.course.credit_hour;
    });
    let average = total / sumi;
    return average;
  };
  console.log(grades);
  return (
    <>
    <StudentPage />
    <div className='StudentGradesContainer'>
      <p>Student Name: {student.name}</p>
      <p>Student ID: {student.id}</p>
      {grades.map((semester, index) => (
        <div  key={index}>
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
              {semester.result.map((course, index) => (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>{course.course.name}</td>
                  <td>{course.grade}</td>
                  <td>{course.result}</td>
                </tr>
              ))}
              <tr className='cgpa-row'>
                <td colSpan="1">Cumulative Grade</td>
                <td>{calculateGPA(semester.result).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </>

  );
}

export default StudentGrades;