import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';

function TeacherLoggedRoute({ exact, path, children }) {
    const { isTeacher } = useContext(UserContext);
    const history = useHistory();
    if (!isTeacher) {
        history.push('/');
    }
    return (
            <Route exact={exact} path={path}>
                {children}
            </Route>
        )    
}

export default TeacherLoggedRoute;