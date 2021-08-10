import React, { useContext } from 'react';
import NavLogged from './NavLogged';
import NavNotLogged from './NavNotLogged';
import UserContext from '../context/UserContext';

function Navbar() {
    const { user } = useContext(UserContext);
    const handleNav =  (user) ? <NavLogged /> : <NavNotLogged />
    return (
        <div>
            {handleNav}
        </div>
    );
}

export default Navbar;