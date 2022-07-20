import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Adder from './component/Adder';
import Users from './component/Users';
import UserDetail from './component/UserDetail';

function App() {
  const usuarios ={
    "login": "usuario",
    "id": 1054136,
    "node_id": "MDQ6VXNlcjEwNTQxMzY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1054136?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/usuario",
    "html_url": "https://github.com/usuario",
    "followers_url": "https://api.github.com/users/usuario/followers",
    "following_url": "https://api.github.com/users/usuario/following{/other_user}",
    "gists_url": "https://api.github.com/users/usuario/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/usuario/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/usuario/subscriptions",
    "organizations_url": "https://api.github.com/users/usuario/orgs",
    "repos_url": "https://api.github.com/users/usuario/repos",
    "events_url": "https://api.github.com/users/usuario/events{/privacy}",
    "received_events_url": "https://api.github.com/users/usuario/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2011-09-15T19:25:23Z",
    "updated_at": "2019-10-24T22:06:37Z"
  }
  
  const jorge =  {
    "login": "JorgePerezEC",
    "id": 102699851,
    "node_id": "U_kgDOBh8TSw",
    "avatar_url": "https://avatars.githubusercontent.com/u/102699851?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JorgePerezEC",
    "html_url": "https://github.com/JorgePerezEC",
    "followers_url": "https://api.github.com/users/JorgePerezEC/followers",
    "following_url": "https://api.github.com/users/JorgePerezEC/following{/other_user}",
    "gists_url": "https://api.github.com/users/JorgePerezEC/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JorgePerezEC/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JorgePerezEC/subscriptions",
    "organizations_url": "https://api.github.com/users/JorgePerezEC/orgs",
    "repos_url": "https://api.github.com/users/JorgePerezEC/repos",
    "events_url": "https://api.github.com/users/JorgePerezEC/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JorgePerezEC/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jorge Pérez Chimborazo",
    "company": null,
    "blog": "",
    "location": "Quito, Ecuador",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-03-30T21:33:32Z",
    "updated_at": "2022-07-11T12:34:09Z"
  }

  const [userList, setUserList] = useState ([]);
  const addUser = (newUser) => {
    setUserList([...userList, newUser]);
  //AWM2022A
  }

  const updateUser = (idx) => {
    const item = { ...userList[idx] };
    item.status = !item.status;
    setUserList(
      [
        ...userList.slice(0, idx),
        item,
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
        <Users githubUsers = {['ArnoldIza', 'kevindavid17', 'jouxjr7', 'AngelXS', 'JorgePerezEC', 'aleste-dx']} userList={userList} updateUser={updateUser}/>
      </div>
      {/*<div>
        <UserDetail/>
</div>*/}
    </div>
  );
}

export default App;
