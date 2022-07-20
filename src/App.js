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
  return (
    <div className="App">
      <div>
        <Adder addUser={addUser}/>
      </div>
      <div>
        <Users githubUsers = {['ArnoldIza', 'kevindavid17', 'jouxjr7', 'AngelXS', 'JorgePerezEC', 'aleste-dx']}/>
      </div>
      <div>
        <UserDetail/>
      </div>
    </div>
  );
}

export default App;
