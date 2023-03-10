import { useState, useEffect } from 'react';
import { getTokenFromCookie } from './common';
import {getAllUsers, authCheck} from "./utils";
import UserWrapper from './components/userWrapper/UserWrapper';

import './App.css';

function App() {

  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null
  });

  const [users, setUsers] = useState();

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token")

      if (token === false) {
        setUser({
          username: null,
          email: null,
          token: null,
        });
      } else {
          loginWithToken(token, setUser);
      }
    }
  }, []);
  
  const loginWithToken = async (token) => {
    const persistentUser = await authCheck(token);
    await setUser(persistentUser.user);
  };

  const logout = (e) => {
    e.preventDefault();
    setUser({
      username: null,
      email: null,
      token: null,
    });
    setUsers(null);
      document.cookie = 
      "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    const cookieName = "jwt_token";
    setUsers(await getAllUsers(cookieName));
  };

  return (
    <div className="App-wrapper">
        <h1>THIS IS AN APP</h1>
        <UserWrapper user={user} setUser={setUser}/>

        <>{user.token ? (
        <p>Logged in</p>
        ) : ( 
        <p>Not logged in</p>
        )}
        </>

          <form onSubmit={(e) => submitHandler(e)}>
            <button type="submit">Get All Users</button>
            <button onClick={(e) => logout(e)}>Logout</button>
          </form>
        <>{users ? users.map((user, index) => <p key={user.id}>{user.username}</p>) : null}</>
    </div>
  );
};

export default App;

// TypeError: NetworkError when attempting to fetch resource:
// DB is not connected to app