import { useAppContext } from "./Navbar";


export default function UserContainer() {
  console.log(useAppContext());
  const {user, logout} = useAppContext();
  
  return <><div>{user ? 'Hello, ' + user.name : 'Please login'}</div>
      <button className="btn" onClick={logout}>{user ? 'Logout': 'login'}</button></>;
}
  