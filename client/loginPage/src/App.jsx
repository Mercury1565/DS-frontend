import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import LoginPage from './components/loginSignup/LoginPage.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import StudentREG  from './components/Admin/StudentREG.jsx'
import TeacherREG from './components/Admin/TeacherREG.jsx'
import CourseReg from './components/Admin/CourseReg.jsx'
import AdminProfile from './components/Admin/AdminProfile.jsx'
import TeacherProfile from './components/Teacher/TeacherProfile.jsx'
import StudentProfile from './components/Students/StudentProfile.jsx'
import StudentGrades from './components/Students/StudentGrades.jsx'
import SubmitGrades from './components/Teacher/SubmitGrades.jsx'
import AnnounceExam from './components/Teacher/AnnounceExam.jsx'
import StudentCourseReg from './components/Students/StudentCourseReg.jsx'
import AnnouncementPage from './components/Students/AnnouncementPage.jsx'


function App() {

  return (
    <>
    <Router>

        <Routes>

            {/* this is for the home page */}

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />


            {/* this is for the admin page */}

            <Route path="/add-student" element={<StudentREG />} />
            <Route path="/add-teacher" element={<TeacherREG />} />
            <Route path="/add-course" element={<CourseReg />} />
            <Route path="/admin-profile" element={<AdminProfile />} />


            {/* this is for the teacher page */}
            <Route path="/grade-submit" element={<SubmitGrades />} />
            <Route path="/announcement" element={<AnnounceExam />} />
            <Route path="/Teacherprofile" element={<TeacherProfile />} />


            {/* this is for the student page */}
            <Route path="/Grade-result" element={<StudentGrades />} />
            <Route path="/course-registration" element={<StudentCourseReg />} />
            <Route path="/Studentprofile" element={<StudentProfile />} />
            <Route path="/Announcements" element={<AnnouncementPage />} />


            <Route path="/logout" element={<HomePage />} />
             
        </Routes>
      </Router>
      
    </>
  )
}

export default App
