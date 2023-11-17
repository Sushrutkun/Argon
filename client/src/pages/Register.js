import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('register');
    // navigate('/home')
  };

  return (
    <div className='register h-screen w-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='form flex flex-col border-4 border-black p-4 rounded-2xl shadow-2xl'>
        <h3 className='reg flex justify-center font-bold text-2xl'>Register</h3>
        <div className='flex-col'>
          <button type='button' onClick={()=> console.log("continue with L")} className='p-2 m-2 ml-28 border-2 border-black rounded-lg text-base font-normal'>
            Continue With Linkedin
          </button>
          <div>
            <button type='button' onClick={()=> console.log("continue with I")} className='p-2 m-2 border-2 border-black rounded-lg text-base font-normal'>
              Continue With Instagram
            </button>
            <button type='button' onClick={()=> console.log("continue with T")} className='p-2 m-2 border-2 border-black rounded-lg text-base font-normal'>
              Continue With Twitter(X)
            </button>
          </div>
        </div>
        <hr className='my-4'></hr>
        <div className='input flex flex-col'  >
          <div className='username flex justify-around items-center'>
            <label htmlFor='username' className='my-2'>
              Username
            </label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              className='border p-2 m-2 rounded-lg hover:shadow-lg'
            />
          </div>
          <div className='fname flex justify-around items-center'>
            <label htmlFor='first-Name' className='my-2'>
              First-Name
            </label>
            <input
              type='text'
              name='First-Name'
              placeholder='First-Name'
              className='border p-2 m-2 rounded-lg hover:shadow-lg'
            />
          </div>
          <div className='lname flex justify-around items-center'>
            <label htmlFor='last-Name' className='my-2'>
              Last-Name
            </label>
            <input
              type='text'
              name='Last-Name'
              placeholder='Last-Name'
              className='border p-2 m-2 rounded-lg hover:shadow-lg'
            />
          </div>
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
        <a onClick={() => navigate('/login')} className='toggle cursor-pointer'>
          Already have an account?
        </a>
      </form>
    </div>
  );
};

export default Register;
