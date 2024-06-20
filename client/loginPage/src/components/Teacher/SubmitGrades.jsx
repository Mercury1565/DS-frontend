import React, { useState } from 'react';
import '../../styles/SubmitGradesStyle.css';
import TeacherPage from './TeacherPage';

function SubmitGrades() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [students, setStudents] = useState([]);
  const [courseId, setCourseId] = useState('');  

  // Dummy data
  const allStudents = [
    { id: 1, name: 'Student 1', year: '1', semester: '1', grade: '' },
    { id: 2, name: 'Student 2', year: '1', semester: '1', grade: '' },
    { id: 3, name: 'Student 3', year: '1', semester: '2', grade: '' },
    // Add more students as needed
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Filter students based on year and semester
    const filteredStudents = allStudents.filter(student => student.year === year && student.semester === semester);
    setStudents(filteredStudents);
  };

  const handleGradeChange = (event, studentId) => {
    const updatedStudents = students.map(student => 
      student.id === studentId ? {...student, grade: event.target.value} : student
    );
    setStudents(updatedStudents);
  };

  const submitGrades = () => {
    // Here you can handle the submission of all grad    .dropdown {
es
    console.log(students);
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
                    <td className="name-cell">{student.name}</td>
                    <td className="grade-cell">
                        <input type="text" value={student.grade || ''} onChange={(e) => handleGradeChange(e, student.id)} />
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