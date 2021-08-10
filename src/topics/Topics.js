import React, {useState, useEffect,  useContext} from 'react';
import afterClassroomAPI from '../api';
import TopicsList from './TopicsList';
import UserContext from '../context/UserContext';
import './topicCard.css';

function Topics() {
    const { topics, setTopics } = useContext(UserContext);

    async function deleteTopic(id){
        await afterClassroomAPI.deleteTopic(id)
        for (let i = 0; i < topics.length; i++){
            if (topics[i].id === id) {
                const newTopics = topics.splice(i, 1);
                setTopics(newTopics);
                break;
            }
        }
    }

    return (
        <div className='container mt-5'>
            <TopicsList topics={topics} deleteTopic={deleteTopic} />
        </div>
    )
}

export default Topics;