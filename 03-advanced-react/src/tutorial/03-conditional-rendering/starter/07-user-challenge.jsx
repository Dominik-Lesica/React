import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState({name: 'Robbvan'}) 

  /*<>
  <h2>{user? `Welcome, ${user.name}` : 'Please login'}</h2>
  <button className="btn" onClick={() => setUser(user? null : {name: 'robbvan'})}>{user? 'log out' : 'log in'}</button>
  </>*/

  return <>
  {user? 
  <div>
    <h2>Welcome, {user.name}</h2>
    <button className="btn" onClick={() => setUser(null)}>Log out</button>
  </div> 
  : 
  <div>
    <h2>Please, login</h2>
    <button className="btn" onClick={() => setUser({name: 'Robbvan'})}>Log in</button>
  </div>
  }
  </>
};

export default UserChallenge;
