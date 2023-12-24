import { useState } from "react";

const ToggleChallenge = () => {
  const [isToggled, getIsToggled] = useState(false)

  return <>
  <button onClick={() => getIsToggled(!isToggled)} className="btn">{isToggled? 'close' : 'open'}</button>
  {isToggled && <Article />}
  </>;
};

function Article() {
  return <>
  <div>
    <h2>Police arrest the Chef</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit ex eius facere nemo vitae quod sapiente, similique ad laborum assumenda dolores quasi quia nisi facilis pariatur sint itaque labore!</p>
  </div>
  </>
}

export default ToggleChallenge;
