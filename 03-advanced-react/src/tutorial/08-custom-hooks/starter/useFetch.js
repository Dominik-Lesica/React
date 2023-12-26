import { useEffect, useState } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
  
        const data = await resp.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }
  
      setIsLoading(false);
    };
    fetchData();
  }, [])
   

  return [isLoading, isError, data];
};

export default useFetch;