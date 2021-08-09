import React from 'react';
import moment from 'moment'
import './summary.css';

function SummaryCard({ first_name, last_name, start, endexam, score, is_done,topic }) {
    return (
        <div className = 'summaryCard mt-3'>
            <h5>{first_name} {last_name}</h5>
            <h5>{topic}</h5>
            <p>Date Taken: {moment(start).format('LL')} </p>
            <p>Time Taken: {moment(start).format('LT')} </p>
            <p>Status: {(is_done) ? 'Done' : 'Incomplete'} </p>
            <p>Exam Finished: {moment(endexam).format('LL')} </p>
            <p>Exam Finished: {moment(endexam).format('LT')} </p>
            <p>Score: {score}</p>
        </div>
    )
    
}

export default SummaryCard;