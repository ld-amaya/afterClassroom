import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.css';

function QuestionCard({ id, topic, question, count, image, a, b, c, d, answer, deleteQuestion }) {
    
    const isA = (answer === 'a') ? true : false;
    const isB = (answer === 'b') ? true : false;
    const isC = (answer === 'c') ? true : false;
    const isD = (answer === 'd') ? true : false;

    const handleDelete = () => {
        deleteQuestion(id);
    }
    return (
        <div className="card text-left mt-2">
            <div className ='d-flex justify-content-between card-header'>
                <h5>{topic.toUpperCase()}</h5>
                <div>
                    <NavLink exact to={`/topic/${topic}/questions/${id}`} ><i className="far fa-edit"></i></NavLink>
                    <button onClick = {handleDelete} className='btn btn-sm'> <i className="far fa-trash-alt"></i> </button>
                </div>
            </div>
            <div className="card-body text-left">
                <p className="card-text">{count}. {question}</p>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={id} id="choice_a"  checked = { isA } readOnly/>
                    <label className="form-check-label" htmlFor="choice_a">
                        {a}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={id} id="choice_b" checked = { isB } readOnly/>
                    <label className="form-check-label" htmlFor="choice_b">
                        {b}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={id} id="choice_c" checked = { isC }readOnly/>
                    <label className="form-check-label" htmlFor="choice_c">
                        {c}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={id} id="choice_d"  checked = { isD } readOnly/>
                    <label className="form-check-label" htmlFor="choice_d">
                        {d}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;