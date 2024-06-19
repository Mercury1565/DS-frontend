import { useState } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import LoginPage from './components/loginSignup/LoginPage.jsx'
import AdminPage from './components/Admin/AdminPage.jsx'
import StudentPage from './components/Students/StudentPage.jsx'
import TeacherREG from './components/Admin/TeacherREG.jsx'
import StudentREG from './components/Admin/StudentREG.jsx'
import TeacherPage from './components/Teacher/TeacherPage.jsx'

function App() {

  return (
    <>
      {/* <LoginPage /> */}
      {/* <AdminPage /> */}
      {/* <StudentPage /> */}
      <TeacherPage />
      {/* <TeacherREG /> */}
      {/* <StudentREG /> */}
    </>
  )
}

export default App
