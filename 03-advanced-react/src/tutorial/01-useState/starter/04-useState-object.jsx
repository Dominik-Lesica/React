import { useState } from 'react';


const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'reading books'
  })
  function changePerson() {
    setPerson({...person, name:'Susan'})
  }
  return <>
  <h1>{person.name}</h1>
  <h2>{person.age}</h2>
  <h3>Enjoys: {person.hobby}</h3>
  <button className="btn" onClick={changePerson}>See John</button>
  </>
};

export default UseStateObject;
