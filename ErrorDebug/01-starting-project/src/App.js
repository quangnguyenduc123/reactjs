import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import Users from './components/Users/Users';


function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsers(preS => {
      return [...preS, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <Users users={users}></Users>
    </div>
  );
}

export default App;
