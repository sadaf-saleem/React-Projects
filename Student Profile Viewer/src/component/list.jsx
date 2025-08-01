
import React from 'react';
// import './index.css'

function UserList({ users }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <div className="grid">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img src={user.image} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;




