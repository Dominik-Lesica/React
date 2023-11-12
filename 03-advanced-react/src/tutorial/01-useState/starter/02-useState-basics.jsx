import { useState } from "react";

const UseStateBasics = () => {
  /*console.log(useState());
  const value = useState('wolly')[0];
  const func = useState('wolly')[1];
  console.log(value);
  console.log(func);*/
  const [count, setCount] = useState(0)
  function countAdd() {
    setCount(count+1);
  }
  return (<>
  <h1>{count}</h1>
  <button className="btn" onClick={countAdd}>Add</button>
  </>);
};

export default UseStateBasics;
