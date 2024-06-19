import { useState } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import LoginPage from './components/loginSignup/LoginPage.jsx'
import AdminPage from './components/Admin/AdminPage.jsx'
import StudentPage from './components/Students/StudentPage.jsx'
import StudentREG from './components/Admin/StudentREG.jsx'
import TeacherPage from './components/Teacher/TeacherPage.jsx'
import StudentProfile from './components/Students/StudentProfile.jsx'
import AdminProfile from './components/Admin/AdminProfile.jsx'
import StudentGrades from './components/Students/StudentGrades.jsx'
import SubmitGrades from './components/Teacher/SubmitGrades.jsx'

function App() {

  return (
    <>
      <LoginPage />

      {/* <AdminPage /> */}
      {/* <StudentPage /> */}
      {/* <TeacherPage /> */}

      {/* <TeacherREG /> */}
      {/* <StudentREG />   */}

      {/* <AdminProfile /> */}
      {/* <TeacherProfile /> */}
      {/* <StudentProfile /> */}

      {/* hermon */}
      {/* <StudentGrades /> */}
      {/* <SubmitGrades /> */}
      
    </>
  )
}

export default App
