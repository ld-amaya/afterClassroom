import React, {useState, useEffect} from 'react';
import afterClassroomAPI from '../api';
import TopicsList from './TopicsList';
import UserContext from '../context/UserContext';
import './topicCard.css';

function Topics() {
    let [topics, setTopics] = useState([]);

    useEffect(() => {
        async function getTopics() {
            const t = await afterClassroomAPI.topics();
            setTopics(t);
        }
        getTopics();
    }, [topics]);

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