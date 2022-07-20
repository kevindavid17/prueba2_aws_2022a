import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Adder from './component/Adder';
import Users from './component/Users';
import UserDetail from './component/UserDetail';

function App() {

  const [userList, setUserList] = useState ([]);
  const addUser = (newUser) => {
    setUserList([...userList, newUser]);
  //AWM2022A
  }

  const updateUser = (idx) => {
    const item = { ...userList[idx] };
    githubUsers.status = !githubUsers.status;
    setUserList(
      [
        ...userList.slice(0, idx),
        githubUsers,
        ...userList.slice(idx+1, userList.length)
      ]
    );
    console.log(userList);
  }


  return (
    <div className="App">
      <div>
        <Adder addUser={addUser}/>
        </div>
      <div>
        <Users githubUsers = {['ArnoldIza', 'kevindavid17', 'jouxjr7', 'AngelXS', 'JorgePerezEC', 'aleste-dx']} updateUser={updateUser}/>
      </div>
      {/*<div>
        <UserDetail/>
</div>*/}
    </div>
  );
}

export default App;
