import { data } from "../../../data.js";
import { useState } from "react";


const UseStateArray = () => {
  const [profileList, setProfileList] = useState(data);
  function removeProfile(id) {
    setProfileList(profileList.filter((profile) => {
      return profile.id !== id
    }));
  }
  function removeAll() {
    setProfileList([]);
  }
  return (<>
  <div>
    {profileList.map((profile) => {
    return <Profile 
    name={profile.name} 
    key={profile.id} 
    removeHandle={() => removeProfile(profile.id)}/>
  })}
  <div>
  <button className="btn" onClick={removeAll}>Remove all</button>
  </div>
  
  </div>
  </>)
};

function Profile({name, removeHandle}) {

  return (<>
  <h1>{name}</h1>
  <button className="btn" onClick={removeHandle}>Remove</button>
  </>)
}

export default UseStateArray;
