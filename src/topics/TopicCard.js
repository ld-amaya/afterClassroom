import React from 'react';
import { NavLink } from 'react-router-dom';
import TopicHeader from './TopicHeader';
import './topicCard.css';

function TopicCard({ id, topic, deleteTopic }) {
    
    return (
        <div className='card topicCard col-5 m-1'>
            <div className='card-header'>
                <TopicHeader id={id} topic={topic} deleteTopic={deleteTopic} />
            </div>
            <div className ='card-body text-center m-3'>
                <h4>
                    <NavLink exact to={`/topics/${topic}/questions`} >
                        {topic.toUpperCase()}
                    </NavLink>
                </h4>
            </div>
        </div>
        
    )
}
export default TopicCard;