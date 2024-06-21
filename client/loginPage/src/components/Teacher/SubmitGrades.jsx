import React, { useState } from 'react';
import '../../styles/SubmitGradesStyle.css';
import TeacherPage from './TeacherPage';
import { filterStudent } from '../../bridge/studentsBasedoncourse';
import { submitGrade } from '../../bridge/submitGrade';

function SubmitGrades() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [students, setStudents] = useState([]);
  const [courseId, setCourseId] = useState('');  

  ;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Filter students based on year and semester
    try {
      const reponse = await filterStudent(courseId, year, semester);
      setStudents(reponse);
      alert("Students fetched successfully");
    }
    catch (error) {
      alert("Error fetching students")
      console.log(error);
    }
  };

  const handleGradeChange = (event, studentId) => {
    const updatedStudents = students.map(student => 
      student.id === studentId ? {...student, grade: event.target.value} : student
    );
    setStudents(updatedStudents);
  };

  const submitGrades = () => {
    // Submit grades for all students`/students/${studentId}/enrollments/${enrollmentId}/`
    students.forEach(async student => {
      try {
        console.log(student);
        console.log(student.student.id, student.id, student.grade);
        const response = await submitGrade(student.student.user_id, student.id, student.grade);
        console.log(response);
        alert("Grades submitted successfully");
      }
      catch (error) {
        alert("Error submitting grades");
        console.log(error);
      }
    });
  };

  return (
    <>
    <TeacherPage />
    <div>
      <h1 className = "SubmitGrade-h1">Submit Grades</h1>
      <div className="selector-card">
        <form className = "SubmitGrade-from" onSubmit={handleSubmit}>
            <div className='SubmitGrade-form-div '>
            <label>Year:</label>
                <select className="dropdown" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="">Select Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className='SubmitGrade-form-div '>
            <label>Semester:</label>
                <select className="dropdown" value={semester} onChange={(e) => setSemester(e.target.value)}>
                    <option value="">Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div>
            <label>Course ID:</label>
            <input className = 'SubmitGrade-form-input' type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
        </div>
            
            <button type="submit">Fetch Students</button>
        </form>
    </div>
      <div className="card">
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Student Name</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            {students.map((student , index) => (
                <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td className="name-cell">{student.student.name}</td>
                    <td className="grade-cell">
                        <input type="text" onChange={(e) => handleGradeChange(e, student.id)} />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <button onClick={submitGrades}>Submit All Grades</button>
      </div>

    </div>
    </>
  );
}

export default SubmitGrades;