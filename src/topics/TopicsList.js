import React from 'react';
import TopicCard from './TopicCard';
import TopicAddButton from './TopicAddButton';
import './topicCard.css';

function TopicsList({ topics, deleteTopic }) {

    const displayTopics = topics.map(t =>
        <TopicCard
            key={t.id}
            id={t.id}
            topic ={t.topic}
            deleteTopic = {deleteTopic}
        />)
    return (
        <div className = 'mt-5 row'>
            {displayTopics}
            <TopicAddButton />
        </div>
    )
}

export default TopicsList