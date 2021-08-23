import React, { useState } from 'react';
import Button from './components/UI/Button';
import AddUser from './components/Users/AddUser'
import Users from './components/Users/Users';
import Test from './components/UI/Test'


function App() {
  const [users, setUsers] = useState([])
  const [number, setNumber] = useState(0)

  const addUserHandler = (uName, uAge) => {
    setUsers(preS => {
      return [...preS, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  const onClickHandler = () => {
    setNumber(prevNumber => prevNumber + 1)
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <Users users={users}></Users>
      <div>{number}</div>
      <Test number={number}></Test>
      <Button onClick={onClickHandler}>CLick</Button>
    </div>
  );
}

export default App;
