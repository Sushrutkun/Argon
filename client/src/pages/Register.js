import React from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
  return (
    <div className='register'>
      <form>
        <h3>Register</h3>
        <div>
          continue with linkedin
          continue with insta
          continue with twitter
        </div>
        <hr></hr>
        <label for='username'>
          Username
          <input type='text' name='username' placeholder='Username' />
        </label>
        <label for='first-Name'>
          First-Name
          <input type='text' name='First-Name' placeholder='First-Name' />
        </label>
        <label for='last-Name'>
          Last-Name
          <input type='text' name='Last-Name' placeholder='Last-Name' />
        </label>
        <label for='email'>
          Email
          <input type='text' name='Email' placeholder='Email' />
        </label>
        <label for='password'>
          Password
          <input type='text' name='Password' placeholder='Password' />
        </label>
        <button type='submit'>Get Started</button>
        <a onClick={()=>navigate('/login')} className='toggle cursor-pointer'>Already have an account?</a>
      </form>
    </div>
  )
}

export default Register
