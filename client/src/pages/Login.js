import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('register');
    // navigate('/home')
  };

  return (
    <div className='login h-screen w-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='form flex flex-col border-4 border-black p-4 rounded-2xl shadow-2xl'>
        <h3 className='reg flex justify-center font-bold text-2xl'>Login</h3>
        <div className='input flex flex-col'>
          <div className='email flex justify-around items-center'>
            <label htmlFor='email' className='my-2'>
              Email
            </label>
            <input
              type='text'
              name='Email'
              placeholder='Email'
              className='border p-2 m-2 rounded-lg hover:shadow-lg'
            />
          </div>
          <div className='pass flex justify-around items-center'>
            <label htmlFor='password' className='my-2'>
              Password
            </label>
            <input
              type='text'
              name='Password'
              placeholder='Password'
              className='border p-2 m-2 rounded-lg hover:shadow-lg'
            />
          </div>
        </div>
        <button type='submit' className='bg-blue-500 text-white p-2 my-4 rounded-lg shadow-lg hover:opacity-90'>
          Get Started
        </button>
        <a onClick={() => navigate('/register')} className='toggle cursor-pointer'>
          New User Register here....
        </a>
      </form>
    </div>
  );
};

{
  // return (
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
  // )
}

export default Login
