import React, {useEffect, useContext, useState} from 'react';
import { useParams, NavLink } from 'react-router-dom'
import UserContext from '../context/UserContext';
import afterClassroomAPI from '../api';

function Exam() {
    const { topic } = useParams();
    const { user } = useContext(UserContext);
    const [examID, setExamID] = useState(null);

    useEffect(() => {
        async function getExamId() {
            const res = await afterClassroomAPI.createExam(user, topic);
            setExamID(res);
        }
        getExamId()
    }, [topic,user])
    
    return (
        <div className='mt-5'>
            <h4>Ready for the exam?</h4>
            <NavLink exact to={`/topic/${topic}/exam/${examID}/ongoing`} className = 'btn btn-primary'>Start</NavLink>
        </div>
    )
}

export default Exam