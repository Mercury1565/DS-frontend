import React, { useState } from 'react';
import '../../styles/LoginPage.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log(email, password);
  };

  return (
    <div className="container">
      <h1 className='loginHeader'>Login</h1>
      <form className='Loginform' onSubmit={handleSubmit}>
        <label className='loginLabel' htmlFor="email">Email:</label>
        <input 
          className='loginInput' 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={handleEmailChange} 
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

export default LoginForm;