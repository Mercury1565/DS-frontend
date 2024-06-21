import React, { useState } from 'react';
import '../../styles/LoginPage.css';
import { login } from '../../bridge/login';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      login(username, password);
    }
    catch (error) {
      alert("Login failed");
    }
    
  };

  return (
    <div className="container">
      <h1 className='loginHeader'>Login</h1>
      <form className='Loginform' onSubmit={handleSubmit}>
        <label className='loginLabel' htmlFor="username">Username:</label>
        <input 
          className='loginInput' 
          type="text" 
          id="username" 
          name="username" 
          value={username} 
          onChange={handleUsernameChange} 
        />      
        <label className='loginLabel' htmlFor="password">Password:</label>
        <input 
          className='loginInput' 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={handlePasswordChange} 
        />
        <button className='loginButton' type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;