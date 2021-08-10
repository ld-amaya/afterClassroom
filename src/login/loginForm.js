import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../context/UserContext'
import Alerts from '../alert/alert';

function LoginForm() {
    const history = useHistory();
    const { login } = useContext(UserContext);
    const [err, setErr] = useState([])
    const [formData, setFormData] = useState({
        username: '',
        password:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(formData);
        if (res.success) {
            history.push('/');
        } else {
            setErr(res.err)
        }
            
    }

    return (
        <div className='container col-md-4'>
            { err.length ? <Alerts messages = {err} type = 'danger' /> : null }
            <form onSubmit ={handleSubmit}>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='username'>Username</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='username'
                        name='username'
                        value ={formData.username}
                    />
                </div>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='password'>Password</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        value ={formData.password}
                    />
                </div>
                <button type='submit' className='btn btn-primary btn-sm m-2'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;