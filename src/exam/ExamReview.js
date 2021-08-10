import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
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
    const [correct, setCorrect] = useState(false);
    const [question, setQuestion] = useState(null);
    const [choiceA, setChoiceA] = useState(null)
    const [choiceB, setChoiceB] = useState(null)
    const [choiceC, setChoiceC] = useState(null)
    const [choiceD, setChoiceD] = useState(null)

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
                setCorrect(q.is_correct);
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
            <form>
                <div className = 'd-flex justify-content-between'>
                    <div> 
                        <h3>{correct ? "Correct" : "Wrong"}</h3>
                    </div>
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
                                <input className="form-check-input" type="radio" name='answer' id="choice_a"  value='a' checked ={isA} readOnly/>
                                {choiceA}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='d-flex mt-3'>
                                <input className="form-check-input" type="radio" name='answer' id="choice_b" value='b' checked ={isB} readOnly/>
                                {choiceB} 
                            </div>
                            
                        </div>
                        <div className='form-group'>
                            <div className='d-flex mt-3'>
                                <input className="form-check-input" type="radio" name='answer' id="choice_c" value='c' checked ={isC} readOnly/>
                                {choiceC}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='d-flex mt-3'>
                                <input className="form-check-input" type="radio" name='answer' id="choice_d" value='d' checked ={isD} readOnly/>
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