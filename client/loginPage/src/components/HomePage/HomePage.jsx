import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../styles/HomePage.css'; // Make sure to create a corresponding CSS file


function HomePage() {
  return (
    <> 
    <div className='backgroundimageclass'>
            <div className="universityPortal">
            <header className="portalHeader">
                <h1 className="universityName">University Name</h1>
                <nav className="loginNavigation">
                <Link to="/login" className="loginLink">Log In</Link>
                </nav>
            </header>
            <main className="portalMain">
                <h2>Welcome to Our University Portal</h2>
                <h2>Please log in to access your account and resources.</h2>
            </main>
            </div>

        </div>  
    </>
  );
}

export default HomePage;