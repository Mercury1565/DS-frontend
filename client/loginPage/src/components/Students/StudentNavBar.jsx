import {BrowserRouter as Router , Routes , Route, Link} from 'react-router-dom';
import StudentGrades from './StudentGrades';
import StudentProfile from './StudentProfile';
import StudentHome from './StudentHome';
import '../../styles/StudentNavBarStyling.css';

const StudentNavBar = () => {
    return (
        <>
          <Router>

            <aside className='Student_asideBar'>
                <ul>                    
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/profile"> Profile </Link></li>
                    <li><Link to="/view_grades"> View Grades </Link></li>
                </ul>
                <h1 className="studentPage">Student Page</h1>
            </aside>
            <Routes>
                <Route path="/" element={<StudentHome />} />
                <Route path="/profile" element={<StudentProfile />} />             
                <Route path="/view_grades" element={<StudentGrades />} />
            </Routes>
        </Router> 
        </>
      )
};

export default StudentNavBar;