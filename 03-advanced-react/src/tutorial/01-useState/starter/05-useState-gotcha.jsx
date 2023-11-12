import { useState } from "react";

const UseStateGotcha = () => {
  const [num, setNum] = useState(0)
  function increaseNum() {
    /*setNum((prevNum) => {
      return prevNum + 1;
    });*/
    console.log('click');
    setTimeout(() => {
      setNum((prevNum) => {
        return prevNum + 1;
      });
    }, 5000)
  }
  return <>
  <h2>{num}</h2>
  <button className="btn" onClick={increaseNum}>Add 1</button>
  </>;
};

export default UseStateGotcha;
