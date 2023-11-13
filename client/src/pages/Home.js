import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.length===0) {
      navigate('/login');
    }
  }
  // , []
  );
  return (
    <div className='home'>
      Home
    </div>
  )
}

export default Home
