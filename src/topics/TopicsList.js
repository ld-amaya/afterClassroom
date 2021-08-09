import React from 'react';
import { NavLink } from 'react-router-dom';
import TopicCard from './TopicCard';
import './topicCard.css';

import TopicForm from './TopicForm';

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
            <NavLink exact to='/topics/add'className ='btn-primary col-md-5 m-1'>
                <h4>+ Add New Topic</h4>
            </NavLink>
        </div>
    )
}

export default TopicsList