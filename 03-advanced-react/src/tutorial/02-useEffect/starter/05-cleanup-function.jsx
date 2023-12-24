import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [isToggled, getIsToggled] = useState(false)

  return <>
  <button onClick={() => getIsToggled(!isToggled)} className="btn">{isToggled? 'close' : 'open'}</button>
  {isToggled && <RandomComponent />}
  </>;
};

function RandomComponent() {
  useEffect(() => {
    function someFunc() {
      console.log('scrolling');
    }
    window.addEventListener('scroll', someFunc);

    return () => {
      window.removeEventListener('scroll', someFunc)
    }
  }, []);
  return <div><h2>Hello there!</h2></div>
}

export default CleanupFunction;
