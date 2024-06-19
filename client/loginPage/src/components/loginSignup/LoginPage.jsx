import React from 'react'
import './LoginPage.css'

function LoginPage() {
  return (
    <div className="container">
      <h1 className='loginHeader'>Login</h1>
      <form className='Loginform'>
        <label className='loginLabel' htmlFor="email">Email:</label>
        <input className='loginInput' type="email" id="email" name="email" />
        <label className='loginLabel' htmlFor="password">Password:</label>
        <input className='loginInput' type="password" id="password" name="password" />
        <button className='loginButton' type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage