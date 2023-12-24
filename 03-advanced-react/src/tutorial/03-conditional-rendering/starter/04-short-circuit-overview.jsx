import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [firstValue, setFirstValue] = useState('jonathaneal');
  const [secondValue, setSecondValue] = useState(0);

  return <h2>{firstValue || secondValue}</h2>;
};
export default ShortCircuitOverview;
