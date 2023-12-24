import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return <>
    <h2>{text || <div>Default value</div>}</h2>
    {user && <SomeComponent name={user.name} />}
    <h2>{text? 'yes text' : 'no text'}</h2>
  </>;
};

function SomeComponent({name}) {
  return <div>
    <h2>Whatever return</h2>
    <h2>{name}</h2>
  </div>
}

export default ShortCircuitExamples;
