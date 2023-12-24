import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [userData, setUserData] = useState({});

  async function fetchUserData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const userData = await response.json();
      setUserData(userData);
      console.log(response);
      console.log(userData);
    } catch {
      setIsError(true);
    }
    setIsLoading(false);
    
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error!</h2>
  }

  const {avatar_url, name, company, bio} = userData;

  return <div>
    <img src={avatar_url}/>
    <h2>{name}</h2>
    <h4>Works at: {company}</h4>
    <p>{bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
