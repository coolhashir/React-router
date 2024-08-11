import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';

const Home = () => {
  const [user, setUser] = useState({ name: 'John Doe', age: 25 });

  useEffect(() => {
    // Example effect: Fetch user data from API or perform other side effects
    console.log('User data loaded:', user);
  }, [user]);

  return (
    <div>
      <h1>Home Page</h1>
      <UserDetails user={user} />
    </div>
  );
};

export default Home;