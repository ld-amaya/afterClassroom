import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import afterClassroomAPI from '../api';
import moment from 'moment'

function ExamResult() {
    const [score, setScore] = useState(null);
    const [startExam, setStartExam] = useState(null);
    const [endExam, setEndExam] = useState(null);
    const { user, examID } = useParams()
    
    useEffect(async () => {
        async function getResults() {
            const res = await afterClassroomAPI.finishExam(user, examID)    
            setScore(res.score);
            setStartExam(res.start);
            setEndExam(res.endexam);
        }
        getResults()
    }, []);

    return (
        <div>
            <p>Score: {score}</p>
            <p>Start: {moment(startExam).format('LT')}</p>
            <p>End: {moment(endExam).format('LT')}</p>
        </div>
    )
}

export default ExamResult;