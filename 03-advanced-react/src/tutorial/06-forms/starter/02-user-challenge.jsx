import { useEffect, useState } from "react";
import {data} from '../../../data.js'

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  function removeUser(userId) {
    setUsers(users.filter((user) => {
      console.log(userId);
      return user.id !== userId;
    }))
  }

  return (
    <div>
      <form className='form' onSubmit={(e) => {
        e.preventDefault();
        if (!name) return;
        setUsers([...users, {id: users.length + 1, name}]);
      }}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <ul>
        {users.map((user) => {
          return <li>
            <h4 style={{
              display: "inline-block", marginRight: "30px"
              }}>{user.name}</h4>
            <button className="btn"  style={{
              backgroundColor: "red"
            }} onClick={() => {
              removeUser(user.id);
            }}>Remove</button>
            </li>
        })}
      </ul>
    </div>
  );
};
export default UserChallenge;
