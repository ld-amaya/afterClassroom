import React from 'react'
import SummaryCard from './SummaryCard';

function SummaryList({ results }) {
    let count = 1;
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
            topic={r.topic}
            count = {count++}
        />)
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Topic</th>
                        <th scope="col">Date / Time Taken</th>
                        <th scope="col">Date /Time Finished</th>
                        <th scope="col">Score</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {displayResult}
                </tbody>
            </table>
        </div>
    )
}

export default SummaryList;
