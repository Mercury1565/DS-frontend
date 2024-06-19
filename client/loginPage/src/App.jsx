import { BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"

import LoginPage from './components/loginSignup/LoginPage.jsx'
import StudentProfile from './components/Students/StudentProfile.jsx'
import StudentNavBar from "./components/Students/StudentNavBar.jsx"

function App() {

  return (
    <div className = "App">

      <StudentNavBar/>

    </div>
  )
}

export default App
