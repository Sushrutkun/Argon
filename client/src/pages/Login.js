import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <form>
        <h3>Login</h3>
        <label for='email'>
          Email
          <input type='text' name='Email' placeholder='Email' />
        </label>
        <label for='password'>
          Password
          <input type='text' name='Password' placeholder='Password' />
        </label>
        <button type='submit'>Get Started</button>
      </form>
    </div>
  )
}

export default Login
