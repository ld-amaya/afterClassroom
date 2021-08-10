import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import UserContext from '../context/UserContext';

function TopicAddButton() {
    const { user, isTeacher } = useContext(UserContext);
    if (user && isTeacher) {
        return (
            <NavLink exact to='/topics/add'className ='btn-primary col-md-5 m-1'>
                <h4>+ Add New Topic</h4>
            </NavLink>   
        )
    }
    return (null)
}

export default TopicAddButton