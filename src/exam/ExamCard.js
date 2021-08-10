import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import afterClassroomAPI from '../api';
import './exam.css';

function ExamCard() {
    const { user } = useContext(UserContext)
    const { topic, examID } = useParams();
    const [count, setCount] = useState(1);
    const [isA, setIsA] = useState(false);
    const [isB, setIsB] = useState(false);
    const [isC, setIsC] = useState(false);
    const [isD, setIsD] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [question, setQuestion] = useState(null);
    const [choiceA, setChoiceA] = useState(null)
    const [choiceB, setChoiceB] = useState(null)
    const [choiceC, setChoiceC] = useState(null)
    const [choiceD, setChoiceD] = useState(null)
    const history = useHistory();

    // Get the question
    useEffect(() => {
        async function getQuestion(){
            // getExamNum(useaname,topic,examID, num)
            const q = await afterClassroomAPI.getExamNum(user, examID, count)
            if (q) {
                setChoiceA(q.a);
                setChoiceB(q.b);
                setChoiceC(q.c);
                setChoiceD(q.d);
                setQuestion(q.question);
                setAnswer(q.your_answer);
            }   
        }
        getQuestion()
    }, [user,examID,count])
    
    useEffect(() => {
        function selectChoice(answer) {
            (answer === 'a') ? setIsA(true) : setIsA(false);
            (answer === 'b') ? setIsB(true) : setIsB(false);
            (answer === 'c') ? setIsC(true) : setIsC(false);
            (answer === 'd') ? setIsD(true) : setIsD(false);
        }
        selectChoice(answer)
    }, [answer])

    const handleClick = (e) => {
        const { value } = e.target
        setAnswer(value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await afterClassroomAPI.saveAnswer(user, examID, count, answer);
        history.push(`/student/${user}/exam/${examID}/result`);
    }

    const handleNext = async (e) => {
        e.preventDefault();
        await afterClassroomAPI.saveAnswer(user, examID, count, answer)
        if (count < 10) {
            let x = count + 1
            setCount(x);    
        } else {
            
        }
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        if (count > 1) {
            let x = count - 1
            setCount(x);    
        } 
    }

    return (
        <div className ='container col-md-8 mt-5'>
            <form onSubmit={handleSubmit}>
                <div className ='d-flex justify-content-end'>
                    <button type='submit' className='btn btn-primary btn-sm m-1'>Submit</button>
                </div>
                <div className='card'>
                    <div className='card-header d-flex justify-content-between form-group'>
                        <div>{topic.toUpperCase()}</div>
                        <div>({count} / 10)</div>
                    </div>
                    <div className ='card-body'>
                        <div className='question form-group'>
                            {question}
                        </div>
                        <div className='form-group'>
                            <div className ='d-flex mt-3'>
                                <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_a"  value='a' checked ={isA} />
                                {choiceA}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='d-flex mt-3'>
                                <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_b" value='b' checked ={isB}/>
                                {choiceB} 
                            </div>
                            
                        </div>
                        <div className='form-group'>
                            <div className='d-flex mt-3'>
                                <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_c" value='c' checked ={isC}/>
                                {choiceC}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='d-flex mt-3'>
                                <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_d" value='d' checked ={isD}/>
                                {choiceD}
                            </div>
                        </div>
                    </div>
                    <div className='card-footer d-flex justify-content-between mt-3'>
                        <button onClick={handlePrevious} type='button' className='btn btn-primary mx-2'>Previous</button>
                        <button onClick={handleNext} type='button' className='btn btn-primary mx-2'>Next</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ExamCard;