import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Navbar() {
    const { logout } = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">afterClassroom</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to='/'>Home</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className = 'mx-2'>
                                <NavLink  exact to='/login'> Login </NavLink>
                            </div>
                            <div>
                                <NavLink exact to='/signup'> Signup </NavLink>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;