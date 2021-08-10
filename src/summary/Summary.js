import React, {useState, useEffect, useContext} from 'react'
import SummaryList from './SummaryList';
import afterClassroomAPI from '../api';
import UserContext from '../context/UserContext'

function Summary() {
    const [results, setResults] = useState([]);
    const { user, isTeacher } = useContext(UserContext);

    useEffect(() => {
        async function getResults() {
            let res
            if (user && isTeacher) {
                res = await afterClassroomAPI.results();
            } else {
                res = await afterClassroomAPI.resultsUser(user);
            }
            setResults(res);
        }
        getResults()
    }, []);
    
    return (
        <div className='container'>
            <SummaryList results={results} />
        </div>
    )   
}

export default Summary;
