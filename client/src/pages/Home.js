// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
// if(localStorage.length===0) {
//   navigate('/login');
// }
//   }
// // , []
//   );
//   return (
//     <div className='home'>
//       Home
//     </div>
//   )
// }

// export default Home

// Assuming you are using a front-end framework like React
// Import the necessary React components and hooks

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Home component
const Home = () => {
  // State to store user profiles
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  // Fetch profiles from the API when the component mounts
  useEffect(() => {
    const fetchProfiles = async () => {
      if (localStorage.length === 0) {
        navigate('/login');
      }
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('/api/profiles');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      <h1>User Profiles</h1>
      {profiles.length > 0 ? (
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              {/* Display profile information */}
              <h2>{profile.name}</h2>
              <p>{profile.bio}</p>
              {/* Add more fields as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No profiles available.</p>
      )}
    </div>
  );
};

export default Home;
