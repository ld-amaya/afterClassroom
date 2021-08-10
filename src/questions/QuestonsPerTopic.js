import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuestionsList from './QuestionsList';
import afterClassroomAPI from '../api';

function QuestionsPerTopic() {
    const [questions, setQuestions] = useState([]);
    const [newQs, setNewQs] = useState(false)
    const { topic } = useParams();

    useEffect(() => {
        async function getQuestions() {
            const q = await afterClassroomAPI.topicQuestions(topic);
            setQuestions(q);
        }
        getQuestions()
    }, [topic]);

    useEffect(() => {
        async function getQuestions() {
            const q = await afterClassroomAPI.topicQuestions(topic);
            setQuestions(q);
        }
        getQuestions()
    }, [newQs, topic]);

    const deleteQuestion = async (id) => {
        await afterClassroomAPI.deleteQuestion(id);
        for (let i = 0; i < questions.length; i++){
            if (questions[i].id === id) {
                const newQuestions = questions.splice(i, 1);
                setQuestions(newQuestions);
                setNewQs(true);
                break;
            }
        }
    }

    return (
        <div className ='container'>
            <QuestionsList questions={questions} deleteQuestion={deleteQuestion}/>
        </div>
    )
}

export default QuestionsPerTopic;