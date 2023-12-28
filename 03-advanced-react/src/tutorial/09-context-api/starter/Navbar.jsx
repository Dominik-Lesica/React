import NavLinks  from './NavLinks';
import { useState, createContext } from "react";
import { useContext } from "react";


export const NavbarContext = createContext();

export function useAppContext() {
  return useContext(NavbarContext);
}

function Navbar() {
  const [user, setUser] = useState({name: 'Dominik'});

  function logout() {
    if(user) {
      setUser(null);
    } else {
      setUser({name: 'Dominik'})
    }
  }

  return (<>
    <NavbarContext.Provider value={{user, logout}}>
      <div>
        <div>CONTEXT API</div>
        <NavLinks/>
      </div>
    </NavbarContext.Provider>
    
    </>
  )
}

export default Navbar;