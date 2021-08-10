import React, { useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Alerts from '../alert/alert';
import afterClassroomAPI from '../api'

function TopicForm() {
    const {topic, id} = useParams();
    
    const [formData, setFormData] = useState({topic: topic})
    const [isAdded, setIsAdded] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const top = e.target.topic.value
        if(top.length>0){
            if (!topic && !id) {
                afterClassroomAPI.addTopic(top.toLowerCase());
                setIsAdded(true);
            } else {
                afterClassroomAPI.editTopic(top.toLowerCase(), id);
                setIsEdited(true);
            }
        }
    }
    return (
        <div className ='container col-md-4'>
            <form onSubmit ={handleSubmit}>
                <div className='form-group'>
                    {isAdded ? <Alerts messages={['Topic successfully added!']} type='success' /> : null}
                    {isEdited ? <Alerts messages={['Topic successfully edited!']} type='success' /> : null }
                    <label className='col-form-label' htmlFor='topic'>Topic</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='topic'
                        name='topic'
                        value ={formData.topic}
                    />
                </div>
                <button type='submit' className='btn btn-primary btn-sm m-2'>Submit</button>
                <NavLink exact to='/topics' className='btn btn-success btn-sm m-2'>Back To Topics</NavLink>
            </form>
        </div>
    )
}

export default TopicForm;