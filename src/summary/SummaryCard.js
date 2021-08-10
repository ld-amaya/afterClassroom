import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import './summary.css';

function SummaryCard({ id, count,  first_name, last_name, start, endexam, score, is_done,topic }) {
    return (
        <tr>
            <th scope='row'>{count}</th>
            <td>{first_name} {last_name}</td>
            <td>{topic}</td>
            <td>{moment(start).format('LLL')} </td>
            <td>{moment(endexam).format('LLL')} </td>
            <td>{score}</td>
            <td><NavLink exact to={`/topic/${topic}/exam/${id}/review`}>Visit Exam</NavLink> </td>
        </tr>
    )
    
}

export default SummaryCard;