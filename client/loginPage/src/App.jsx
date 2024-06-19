import { useState } from 'react'
import LoginPage from './components/loginSignup/LoginPage.jsx'
import AdminPage from './components/Admin/AdminPage.jsx'
import StudentGrades from './components/Students/StudentGrades.jsx'
import CourseReg  from './components/Admin/CourseReg.jsx' 
import StudentPage from './components/Students/StudentPage.jsx'
import AnnounceExam from './components/Teacher/AnnounceExam.jsx'

function App() {

  return (
    <>
    {/* <StudentGrades/> */}
    {/* <StudentPage/> */}
    <AnnounceExam/>
    </>
  )
}

export default App
