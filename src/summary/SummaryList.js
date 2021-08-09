import React from 'react'
import SummaryCard from './SummaryCard';

function SummaryList({ results }) {
    
    const displayResult = results.map(r => 
        <SummaryCard
            key={r.id}
            id={r.id}
            first_name={r.first_name}
            last_name = {r.last_name}
            start = {r.start}
            end = { r.endexam }
            score={r.score}
            is_done = {r.is_done}
            topic = {r.topic}
        />)
    return (
        <div>
            {displayResult}
        </div>
    )
}

export default SummaryList;
