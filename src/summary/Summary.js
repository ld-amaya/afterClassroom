import React, {useState, useEffect} from 'react'
import SummaryList from './SummaryList';
import afterClassroomAPI from '../api';

function Summary() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function getResults(){
            const res = await afterClassroomAPI.results();
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
