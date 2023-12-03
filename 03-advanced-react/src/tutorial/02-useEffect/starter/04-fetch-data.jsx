const url = 'https://api.github.com/users';
import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <ul className="users">
    {data.map((userData) => {
      const {login, avatar_url, html_url} = userData;
      return <Profile name={login} imgUrl={avatar_url} htmlUrl={html_url}/>
    })}
  </ul>;
};

function Profile({name, imgUrl, htmlUrl}) {
  return <>
    <section className="profile">
      <div className="left-profile">
        <img src={imgUrl} className="user-img"/>
      </div> 
      <div className="right-profile">
        <h5 className="name">{name}</h5>
        <a href={htmlUrl}>profile</a>
      </div>
    

    </section>
    
  </>
}
export default FetchData;
