import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserDetails;
