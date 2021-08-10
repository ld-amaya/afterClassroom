import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { NavLink } from 'react-router-dom';

function QuestionAddButton() {
    const { user, isTeacher } = useContext(UserContext)
    
    if (user && isTeacher) {
        return (
            <NavLink exact to ='/questions/add' className='btn btn-primary d-flex mt-3'>Add Question</NavLink>
        )
    }
    return(null)
}

export default QuestionAddButton