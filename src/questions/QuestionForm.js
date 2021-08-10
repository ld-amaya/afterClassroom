import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import afterClassroomAPI from '../api';
import UserContext from '../context/UserContext';
import Alerts from '../alert/alert';

function QuestionForm() {
    const { topic, num } = useParams();
    const [isA, setIsA] = useState(false)
    const [isB, setIsB] = useState(false)
    const [isC, setIsC] = useState(false)
    const [isD, setIsD] = useState(false)
    const [answer, setAnswer] = useState([]);

    const [formData, setFormData] = useState({
        topic:'',
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer:''
    })
    
    const { topics } = useContext(UserContext);
    const [isEdited, setIsEdited] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const options = topics.map(t =>
        <option key ={t.id} value = {t.topic}>{t.topic.toUpperCase()}</option>
    )
    useEffect(() => {
        async function getQ(num) {
            if (num) {
                const q = await afterClassroomAPI.getQuestion(num);
                setFormData({
                    topic: topic,
                    question: q.question,
                    a: q.a,
                    b: q.b,
                    c: q.c,
                    d: q.d,
                    answer: q.answer
                });
                setAnswer(q.answer);
            }
        }
        getQ(num)
    }, [num])

    useEffect(() => {
        function selectChoice(answer) {
            (answer === 'a') ? setIsA(true) : setIsA(false);
            (answer === 'b') ? setIsB(true) : setIsB(false);
            (answer === 'c') ? setIsC(true) : setIsC(false);
            (answer === 'd') ? setIsD(true) : setIsD(false);
        }
        selectChoice(answer)
    }, [answer])
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleClick = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        setAnswer(value);
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (topic && num) {
                await afterClassroomAPI.updateQuestion(formData, num);
                setAlertMessage(['Question successfuly edited']);
                setAlertType('success');
            } else {
                // check if correct topic is selected 
                console.log(formData.topic);
                if (formData.topic === 'Select Topic' || formData.topic.length === 0) {
                    setAlertMessage(['Please select correct topic']);
                    setAlertType('danger');
                } else {
                    await afterClassroomAPI.addQuestion(formData);
                    setAlertMessage(['Question successfuly added']);
                    setAlertType('success');
                }
                
            }
            setIsEdited(true)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className ='container'>
            <form onSubmit={handleSubmit}>
                {isEdited ? <Alerts messages={alertMessage} type= {alertType} /> : null }
                <div className='form-group'>
                    <label className='col-form-label d-flex'  htmlFor='topic'>Topic</label>
                    <select onChange={handleChange} className="form-select" aria-label="select" name = "topic" id ="top" value ={formData.topic}>
                        <option selected>Select Topic</option>
                        {options}
                    </select>
                </div>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='question'>Question</label>
                    <textarea
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='question'
                        name='question'
                        value ={formData.question}
                    />
                </div>
                <div className='form-group'>
                    <div className ='d-flex mt-3'>
                        <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_a"  value='a' checked ={isA} />
                        <label className='form-check-label' htmlFor='choice_a'>Choice a</label>
                    </div>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='a'
                        name='a'
                        value ={formData.a}
                    />
                </div>
                <div className='form-group'>
                    <div className='d-flex mt-3'>
                        <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_b" value='b' checked ={isB} />
                        <label className='form-check-label' htmlFor='choice_b'>Choice b</label>    
                    </div>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='b'
                        name='b'
                        value ={formData.b}
                    />
                </div>
                <div className='form-group'>
                    <div className='d-flex mt-3'>
                        <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_c" value='c' checked ={isC}  />
                        <label className='form-check-label' htmlFor='choice_c'>Choice c</label>    
                    </div>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='c'
                        name='c'
                        value ={formData.c}
                    />
                </div>
                <div className='form-group'>
                    <div className='d-flex mt-3'>
                        <input onChange={handleClick} className="form-check-input" type="radio" name='answer' id="choice_d" value='d' checked ={isD} />
                        <label className='form-check-label' htmlFor='choice_d'>Choice d</label>    
                    </div>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='d'
                        name='d'
                        value ={formData.d}
                    />
                </div>
                <div className ='d-grid mt-3'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default QuestionForm;