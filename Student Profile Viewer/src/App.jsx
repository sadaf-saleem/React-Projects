import React, { useState } from 'react';
import UserList from './component/list';

function App() {
  const [users, setUsers] = useState([
    {
      name: "Ali",
      id: 1,
      age: 22,
      image: 'https://media.istockphoto.com/id/1270072400/photo/smiling-schoolboy-in-the-schoolyard.jpg?s=2048x2048&w=is&k=20&c=uoWKIgCxizwQPHKdTfqo54OcgrdTDupTX_4maKhk6r4=',
    },
    {
      name: "Sana",
      id: 2,
      age: 20,
      image: 'https://media.istockphoto.com/id/1889533246/photo/smiling-young-female-student-standing-with-a-laptop-in-a-college-cafeteria.jpg?s=2048x2048&w=is&k=20&c=SZV3Fb9KJC7uZZXiZlwaJ0KPV54i7idiwKpTG_qu_3o=',
    },
    {
      name: "Soha",
      id: 3,
      age: 24,
      image: 'https://media.istockphoto.com/id/649881438/photo/portrait-of-beautiful-businesswoman-holding-files.jpg?s=2048x2048&w=is&k=20&c=yZyBHbt1zRepcLM6U2SFBD89QLDyrTQNqxjMZz8ybyk=',
    },
     
    
  ]);

  return (
    <div className="container">
      <h3>{users.length} Students</h3>
      <UserList users={users} />
      <button onClick={() => setUsers([])}>Clear all</button>
    </div>
  );
}

export default App;
